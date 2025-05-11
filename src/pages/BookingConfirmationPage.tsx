
import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Check, Calendar, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;
  
  // Generate a random booking reference
  const bookingReference = `RD${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  // If no booking data, redirect to booking page
  useEffect(() => {
    if (!booking) {
      navigate('/booking');
    }
  }, [booking, navigate]);
  
  // If no booking data, show loading
  if (!booking) {
    return (
      <div className="container-custom py-32 text-center">
        <p>Loading confirmation...</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 bg-ivory min-h-screen">
      <div className="container-custom max-w-4xl">
        {/* Success Message */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-serif font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-2">Thank you for choosing RD Hotels</p>
          <p className="text-sm text-gray-500">
            A confirmation email has been sent to {booking.guest.email}
          </p>
        </div>
        
        {/* Booking Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-maroon p-6 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif">Booking Details</h2>
              <span className="text-sm">Reference: <span className="font-bold">{bookingReference}</span></span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Room Details */}
              <div>
                <h3 className="font-medium text-lg mb-3">Stay Information</h3>
                <div className="mb-4">
                  <div className="flex">
                    <img 
                      src={booking.room.image} 
                      alt={booking.room.name} 
                      className="w-24 h-24 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h4 className="font-serif">{booking.room.name}</h4>
                      <p className="text-sm text-gray-600">{booking.room.bedType}</p>
                      <p className="text-gold font-medium mt-1">₹{booking.room.price} per night</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium">Check-in:</p>
                      <p className="text-gray-600">
                        {format(new Date(booking.dates.checkIn), "EEEE, dd MMMM yyyy")}
                      </p>
                      <p className="text-sm text-gray-500">From 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium">Check-out:</p>
                      <p className="text-gray-600">
                        {format(new Date(booking.dates.checkOut), "EEEE, dd MMMM yyyy")}
                      </p>
                      <p className="text-sm text-gray-500">Until 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-2 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium">Guests:</p>
                      <p className="text-gray-600">
                        {booking.guest.adults} {booking.guest.adults === 1 ? 'Adult' : 'Adults'}
                        {booking.guest.children > 0 && `, ${booking.guest.children} ${booking.guest.children === 1 ? 'Child' : 'Children'}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Guest Details */}
              <div>
                <h3 className="font-medium text-lg mb-3">Guest Information</h3>
                <div className="space-y-3 mb-6">
                  <p><span className="font-medium">Name:</span> {booking.guest.firstName} {booking.guest.lastName}</p>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gold" />
                    <p>{booking.guest.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gold" />
                    <p>{booking.guest.phone}</p>
                  </div>
                </div>
                
                {booking.guest.specialRequests && (
                  <div>
                    <h4 className="font-medium mb-1">Special Requests:</h4>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded text-sm">
                      {booking.guest.specialRequests}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-6">
              <h3 className="font-medium text-lg mb-3">Payment Summary</h3>
              <div className="bg-ivory rounded p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{booking.room.name}</span>
                    <span>₹{booking.room.price} x {booking.payment.totalNights} nights</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room Total</span>
                    <span>₹{booking.payment.totalAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (12%)</span>
                    <span>₹{booking.payment.taxAmount.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 my-2 pt-2 flex justify-between font-bold">
                    <span>Total Paid</span>
                    <span className="text-gold">₹{booking.payment.grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hotel Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="font-serif text-xl mb-4">Hotel Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold mt-0.5" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-gray-600">
                    123 Main Road, Perundurai, Erode District,<br />
                    Tamil Nadu, India - 638052
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-gold mt-0.5" />
                <div>
                  <p className="font-medium">Contact:</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-gold mt-0.5" />
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-600">info@rdhotels.com</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Getting There:</p>
              <p className="text-gray-600 mb-4">
                The hotel is located in central Perundurai, approximately 15 km from Erode Junction Railway Station and 70 km from Coimbatore International Airport.
              </p>
              <button className="flex items-center text-maroon hover:text-maroon-dark">
                View on Map <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <p className="mb-4">Have questions about your booking? Our team is ready to assist you.</p>
          <div className="flex justify-center gap-4">
            <Link to="/" className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 font-medium">
              Return to Homepage
            </Link>
            <Link to="/contact" className="border-2 border-maroon text-maroon hover:bg-maroon hover:text-white px-6 py-3 rounded transition-colors duration-300 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
