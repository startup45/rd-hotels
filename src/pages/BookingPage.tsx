
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { format, addDays, differenceInDays } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// Room data (same data as in RoomsPage)
const rooms = [
  {
    id: 'deluxe-ac',
    name: 'Deluxe A/C Room',
    description: 'Spacious air-conditioned room with modern amenities and elegant decor.',
    price: 4500,
    capacity: 2,
    size: '325 sq ft',
    bedType: 'King Size or Twin',
    image: 'https://source.unsplash.com/photo-1649972904349-6e44c42644a7',
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Premium suite with separate living area, luxury bathroom, and stunning views.',
    price: 7500,
    capacity: 2,
    size: '500 sq ft',
    bedType: 'King Size',
    image: 'https://source.unsplash.com/photo-1721322800607-8c38375eef04',
  },
  {
    id: 'standard-non-ac',
    name: 'Standard Non-A/C Room',
    description: 'Comfortable and affordable room with essential amenities for a pleasant stay.',
    price: 3000,
    capacity: 2,
    size: '275 sq ft',
    bedType: 'Queen Size or Twin',
    image: 'https://source.unsplash.com/photo-1483058712412-4245e9b90334',
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    description: 'Spacious suite designed for families with connecting rooms and extra amenities.',
    price: 9000,
    capacity: 4,
    size: '650 sq ft',
    bedType: 'King Size + Two Twin Beds',
    image: 'https://source.unsplash.com/photo-1472396961693-142e6e269027',
  },
];

// Step interfaces
interface BookingDates {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
}

interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  specialRequests: string;
}

interface PaymentDetails {
  nameOnCard: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  agreeToTerms: boolean;
}

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const roomId = searchParams.get('room');
  
  // Selected room
  const [selectedRoom, setSelectedRoom] = useState(roomId ? rooms.find(room => room.id === roomId) : null);
  
  // Current step
  const [currentStep, setCurrentStep] = useState(1);
  
  // Step data
  const [bookingDates, setBookingDates] = useState<BookingDates>({
    checkIn: new Date(),
    checkOut: addDays(new Date(), 1),
  });
  
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adults: selectedRoom?.capacity || 2,
    children: 0,
    specialRequests: '',
  });
  
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    agreeToTerms: false,
  });
  
  // Booking summary
  const [totalNights, setTotalNights] = useState(1);
  const [totalAmount, setTotalAmount] = useState(selectedRoom?.price || 0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  
  // Update total nights and amount when dates change
  useEffect(() => {
    if (bookingDates.checkIn && bookingDates.checkOut) {
      const nights = differenceInDays(bookingDates.checkOut, bookingDates.checkIn);
      setTotalNights(nights > 0 ? nights : 1);
    }
  }, [bookingDates]);
  
  // Update tax and grand total when total amount changes
  useEffect(() => {
    const roomTotal = selectedRoom ? selectedRoom.price * totalNights : 0;
    setTotalAmount(roomTotal);
    
    const calculatedTax = roomTotal * 0.12; // 12% tax
    setTaxAmount(calculatedTax);
    
    setGrandTotal(roomTotal + calculatedTax);
  }, [selectedRoom, totalNights]);
  
  // Handle room selection
  const handleRoomSelect = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
    setGuestDetails(prev => ({
      ...prev,
      adults: room.capacity,
    }));
  };
  
  // Handle continue to next step
  const handleContinue = () => {
    // Validate current step
    if (currentStep === 1) {
      if (!selectedRoom) {
        toast.error('Please select a room');
        return;
      }
      if (!bookingDates.checkIn || !bookingDates.checkOut) {
        toast.error('Please select check-in and check-out dates');
        return;
      }
    } else if (currentStep === 2) {
      if (!guestDetails.firstName || !guestDetails.lastName || !guestDetails.email || !guestDetails.phone) {
        toast.error('Please fill in all required fields');
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(guestDetails.email)) {
        toast.error('Please enter a valid email address');
        return;
      }
    }
    
    setCurrentStep(prev => prev + 1);
  };
  
  // Handle back to previous step
  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  // Handle booking submission
  const handleSubmitBooking = () => {
    // In a real application, this would call the Razorpay integration
    // For now, simulate a successful booking
    if (!paymentDetails.nameOnCard || !paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv) {
      toast.error('Please fill in all payment details');
      return;
    }
    
    if (!paymentDetails.agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    // Simulate successful payment and redirect to confirmation
    navigate('/booking/confirmation', { 
      state: { 
        booking: {
          room: selectedRoom,
          dates: bookingDates,
          guest: guestDetails,
          payment: {
            totalNights,
            totalAmount,
            taxAmount,
            grandTotal,
          }
        } 
      } 
    });
  };

  return (
    <div className="pt-32 pb-16 bg-ivory min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-center">Book Your Stay</h1>
        <p className="text-center text-gray-600 mb-10">Complete your booking in a few simple steps</p>
        
        {/* Steps Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-maroon text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`w-16 md:w-24 h-1 ${currentStep >= 2 ? 'bg-maroon' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-maroon text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
            <div className={`w-16 md:w-24 h-1 ${currentStep >= 3 ? 'bg-maroon' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? 'bg-maroon text-white' : 'bg-gray-200 text-gray-600'}`}>
              3
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Step 1: Room Selection & Dates */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Select Room & Dates</h2>
                  
                  {/* Room Selection */}
                  <div className="mb-8">
                    <h3 className="font-medium mb-4">Choose Your Room:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {rooms.map((room) => (
                        <div 
                          key={room.id} 
                          className={`border rounded-lg p-4 flex cursor-pointer hover:border-maroon transition-colors ${selectedRoom?.id === room.id ? 'border-maroon bg-ivory' : 'border-gray-200'}`}
                          onClick={() => handleRoomSelect(room)}
                        >
                          <div className="w-24 h-24 rounded overflow-hidden mr-4 flex-shrink-0">
                            <img 
                              src={room.image} 
                              alt={room.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <h4 className="font-serif font-medium">{room.name}</h4>
                              <p className="font-bold text-gold">₹{room.price}</p>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{room.description}</p>
                            <div className="flex text-sm text-gray-500 gap-4">
                              <span>Capacity: {room.capacity}</span>
                              <span>Bed: {room.bedType}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Date Selection */}
                  <div className="mb-8">
                    <h3 className="font-medium mb-4">Select Your Dates:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Check-in Date */}
                      <div>
                        <Label htmlFor="check-in">Check-in Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal mt-1",
                                !bookingDates.checkIn && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {bookingDates.checkIn ? (
                                format(bookingDates.checkIn, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={bookingDates.checkIn}
                              onSelect={(date) => 
                                setBookingDates(prev => ({
                                  ...prev,
                                  checkIn: date,
                                  // If check-out is before new check-in, update it
                                  checkOut: prev.checkOut && date && prev.checkOut <= date 
                                    ? addDays(date, 1) 
                                    : prev.checkOut
                                }))
                              }
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      {/* Check-out Date */}
                      <div>
                        <Label htmlFor="check-out">Check-out Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal mt-1",
                                !bookingDates.checkOut && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {bookingDates.checkOut ? (
                                format(bookingDates.checkOut, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={bookingDates.checkOut}
                              onSelect={(date) => 
                                setBookingDates(prev => ({
                                  ...prev,
                                  checkOut: date
                                }))
                              }
                              disabled={(date) => 
                                date < new Date() || 
                                (bookingDates.checkIn ? date <= bookingDates.checkIn : false)
                              }
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  
                  {/* Continue button */}
                  <div className="flex justify-end">
                    <Button 
                      className="bg-maroon hover:bg-maroon-dark text-white px-8"
                      onClick={handleContinue}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Guest Details */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Guest Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* First Name */}
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        type="text" 
                        value={guestDetails.firstName} 
                        onChange={(e) => setGuestDetails(prev => ({ ...prev, firstName: e.target.value }))}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    {/* Last Name */}
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        type="text" 
                        value={guestDetails.lastName} 
                        onChange={(e) => setGuestDetails(prev => ({ ...prev, lastName: e.target.value }))}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    {/* Email */}
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={guestDetails.email} 
                        onChange={(e) => setGuestDetails(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={guestDetails.phone} 
                        onChange={(e) => setGuestDetails(prev => ({ ...prev, phone: e.target.value }))}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    {/* Number of Adults */}
                    <div>
                      <Label htmlFor="adults">Number of Adults *</Label>
                      <Input 
                        id="adults" 
                        type="number" 
                        min={1}
                        max={selectedRoom?.capacity || 2}
                        value={guestDetails.adults} 
                        onChange={(e) => setGuestDetails(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    {/* Number of Children */}
                    <div>
                      <Label htmlFor="children">Number of Children</Label>
                      <Input 
                        id="children" 
                        type="number" 
                        min={0}
                        value={guestDetails.children} 
                        onChange={(e) => setGuestDetails(prev => ({ ...prev, children: parseInt(e.target.value) }))}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  {/* Special Requests */}
                  <div className="mb-8">
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea 
                      id="specialRequests" 
                      value={guestDetails.specialRequests}
                      onChange={(e) => setGuestDetails(prev => ({ ...prev, specialRequests: e.target.value }))}
                      className="mt-1"
                      placeholder="Any special requests or requirements"
                    />
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between">
                    <Button 
                      variant="outline"
                      className="border-maroon text-maroon"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button 
                      className="bg-maroon hover:bg-maroon-dark text-white"
                      onClick={handleContinue}
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-serif mb-6">Payment Information</h2>
                  
                  {/* Payment notice - for the demo */}
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
                    <p className="text-blue-800">
                      <strong>Demo Mode:</strong> In a production environment, this would integrate with Razorpay for secure payments. For this demo, please enter mock payment details.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Name on Card */}
                    <div className="md:col-span-2">
                      <Label htmlFor="nameOnCard">Name on Card *</Label>
                      <Input 
                        id="nameOnCard" 
                        type="text" 
                        value={paymentDetails.nameOnCard} 
                        onChange={(e) => setPaymentDetails(prev => ({ ...prev, nameOnCard: e.target.value }))}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    {/* Card Number */}
                    <div className="md:col-span-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input 
                        id="cardNumber" 
                        type="text" 
                        value={paymentDetails.cardNumber} 
                        onChange={(e) => setPaymentDetails(prev => ({ ...prev, cardNumber: e.target.value }))}
                        className="mt-1"
                        placeholder="XXXX XXXX XXXX XXXX"
                        required
                      />
                    </div>
                    
                    {/* Expiry Date */}
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input 
                        id="expiryDate" 
                        type="text" 
                        value={paymentDetails.expiryDate} 
                        onChange={(e) => setPaymentDetails(prev => ({ ...prev, expiryDate: e.target.value }))}
                        className="mt-1"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    
                    {/* CVV */}
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input 
                        id="cvv" 
                        type="text" 
                        value={paymentDetails.cvv} 
                        onChange={(e) => setPaymentDetails(prev => ({ ...prev, cvv: e.target.value }))}
                        className="mt-1"
                        placeholder="XXX"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="mb-8">
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        className="mt-1"
                        checked={paymentDetails.agreeToTerms}
                        onChange={(e) => setPaymentDetails(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                      />
                      <label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the <a href="#" className="text-maroon underline">terms and conditions</a> and <a href="#" className="text-maroon underline">privacy policy</a>. I understand that my booking is subject to the hotel's cancellation policy.
                      </label>
                    </div>
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between">
                    <Button 
                      variant="outline"
                      className="border-maroon text-maroon"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button 
                      className="bg-gold hover:bg-gold-dark text-charcoal"
                      onClick={handleSubmitBooking}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="font-serif text-xl mb-4">Booking Summary</h3>
              
              {selectedRoom ? (
                <>
                  <div className="mb-4">
                    <img 
                      src={selectedRoom.image} 
                      alt={selectedRoom.name} 
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  <h4 className="font-medium">{selectedRoom.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{selectedRoom.bedType}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Check-in:</span>
                      <span className="font-medium">
                        {bookingDates.checkIn ? format(bookingDates.checkIn, "dd MMM yyyy") : "Select date"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out:</span>
                      <span className="font-medium">
                        {bookingDates.checkOut ? format(bookingDates.checkOut, "dd MMM yyyy") : "Select date"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{totalNights} {totalNights === 1 ? 'night' : 'nights'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span className="font-medium">
                        {guestDetails.adults} {guestDetails.adults === 1 ? 'Adult' : 'Adults'}
                        {guestDetails.children > 0 && `, ${guestDetails.children} ${guestDetails.children === 1 ? 'Child' : 'Children'}`}
                      </span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Room Rate:</span>
                      <span>₹{selectedRoom.price} x {totalNights} {totalNights === 1 ? 'night' : 'nights'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Room Total:</span>
                      <span>₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (12%):</span>
                      <span>₹{taxAmount.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Amount:</span>
                    <span className="text-gold">₹{grandTotal.toFixed(2)}</span>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Please select a room to view the booking summary</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
