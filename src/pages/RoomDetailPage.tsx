import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Users, Wifi, Image, Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Room data (same data as in RoomsPage)
const rooms = [
  {
    id: 'deluxe-ac',
    name: 'Deluxe A/C Room',
    description: 'Spacious air-conditioned room with modern amenities and elegant decor.',
    longDescription: 'Our Deluxe A/C Rooms offer the perfect blend of comfort and style. Each room features elegant décor, plush bedding, and modern amenities to ensure a relaxing stay. The rooms are air-conditioned with individual temperature control, providing a comfortable environment regardless of the season. With a focus on both aesthetics and functionality, these rooms are ideal for both business and leisure travelers seeking quality accommodation in Perundurai.',
    price: 4500,
    capacity: 2,
    size: '325 sq ft',
    bedType: 'King Size or Twin',
    amenities: [
      'Air Conditioning', 
      'Free Wi-Fi', 
      'Flat-screen TV', 
      'Private Bathroom', 
      'Room Service',
      'Daily Housekeeping',
      'Coffee/Tea Maker',
      'Work Desk',
      'In-room Safe',
      'Telephone'
    ],
    images: [
      'https://source.unsplash.com/photo-1649972904349-6e44c42644a7',
      'https://source.unsplash.com/photo-1721322800607-8c38375eef04',
      'https://source.unsplash.com/photo-1483058712412-4245e9b90334',
    ],
    featured: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Premium suite with separate living area, luxury bathroom, and stunning views.',
    longDescription: 'Indulge in the spacious luxury of our Executive Suite, designed for those who expect the best. These suites feature a separate living area and bedroom, providing ample space to relax or entertain. The sophisticated décor is complemented by premium furnishings and high-end amenities. Each suite includes a luxurious bathroom with premium toiletries and offers beautiful views of the surroundings. Experience the epitome of comfort and elegance in our Executive Suite.',
    price: 7500,
    capacity: 2,
    size: '500 sq ft',
    bedType: 'King Size',
    amenities: [
      'Air Conditioning', 
      'Free Wi-Fi', 
      'Flat-screen TV', 
      'Mini Bar', 
      'Separate Living Area', 
      'Premium Toiletries',
      'Bathrobe & Slippers',
      'Daily Housekeeping',
      'Coffee/Tea Maker',
      'Work Desk',
      'In-room Safe',
      'Telephone',
      'Welcome Fruit Basket',
      'Evening Turndown Service'
    ],
    images: [
      'https://source.unsplash.com/photo-1721322800607-8c38375eef04',
      'https://source.unsplash.com/photo-1483058712412-4245e9b90334',
      'https://source.unsplash.com/photo-1472396961693-142e6e269027',
    ],
    featured: true,
  },
  {
    id: 'standard-non-ac',
    name: 'Standard Non-A/C Room',
    description: 'Comfortable and affordable room with essential amenities for a pleasant stay.',
    longDescription: 'Our Standard Non-A/C Rooms offer comfortable accommodation at an affordable price. These rooms are well-ventilated with ceiling fans and windows that allow natural air flow. Despite being our most economical option, these rooms provide all essential amenities to ensure a pleasant stay. Each room includes a private bathroom, TV, and free Wi-Fi. The cozy furnishings and thoughtful details make these rooms a great choice for budget-conscious travelers who don\'t want to compromise on quality.',
    price: 3000,
    capacity: 2,
    size: '275 sq ft',
    bedType: 'Queen Size or Twin',
    amenities: [
      'Ceiling Fan', 
      'Free Wi-Fi', 
      'TV', 
      'Private Bathroom', 
      'Daily Housekeeping',
      'Work Desk',
      'Telephone',
      'Toiletries'
    ],
    images: [
      'https://source.unsplash.com/photo-1483058712412-4245e9b90334',
      'https://source.unsplash.com/photo-1649972904349-6e44c42644a7',
      'https://source.unsplash.com/photo-1721322800607-8c38375eef04',
    ],
    featured: false,
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    description: 'Spacious suite designed for families with connecting rooms and extra amenities.',
    longDescription: 'Perfect for family vacations, our Family Suite offers generous space and thoughtful amenities designed with families in mind. The suite features connecting rooms, providing both togetherness and privacy. The main bedroom offers a king-size bed, while the connected room includes two twin beds, making it ideal for children. The suite is equipped with a range of amenities to ensure comfort for all family members, including child-friendly toiletries and entertainment options. Enjoy quality family time in the comfort of our specially designed Family Suite.',
    price: 9000,
    capacity: 4,
    size: '650 sq ft',
    bedType: 'King Size + Two Twin Beds',
    amenities: [
      'Air Conditioning', 
      'Free Wi-Fi', 
      'Flat-screen TVs', 
      'Mini Bar', 
      'Connecting Rooms', 
      'Family Toiletries',
      'Bathrobe & Slippers',
      'Daily Housekeeping',
      'Coffee/Tea Maker',
      'Dining Area',
      'In-room Safe',
      'Telephone',
      'Welcome Amenities for Children',
      'Game Console on Request'
    ],
    images: [
      'https://source.unsplash.com/photo-1472396961693-142e6e269027',
      'https://source.unsplash.com/photo-1721322800607-8c38375eef04',
      'https://source.unsplash.com/photo-1483058712412-4245e9b90334',
    ],
    featured: true,
  },
];

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Find the room based on the ID
  const room = rooms.find(room => room.id === id);
  
  // If room not found, show a message
  if (!room) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-3xl font-serif mb-4">Room Not Found</h1>
        <p className="mb-6">Sorry, the room you're looking for doesn't exist.</p>
        <Link to="/rooms" className="btn-primary">
          View All Rooms
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Room Hero */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Gallery */}
            <div className="md:w-3/5">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <div className="relative h-96 rounded overflow-hidden">
                  <img 
                    src={room.images[selectedImage]} 
                    alt={room.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  {room.images.map((image, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`h-20 w-24 rounded overflow-hidden ${selectedImage === index ? 'ring-2 ring-gold' : ''}`}
                    >
                      <img 
                        src={image} 
                        alt={`${room.name} - View ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Room Info */}
            <div className="md:w-2/5">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                {room.featured && (
                  <div className="inline-block bg-gold text-charcoal px-3 py-1 text-sm font-medium rounded mb-4">
                    Featured Room
                  </div>
                )}
                <h1 className="text-3xl font-serif font-bold mb-2">{room.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-gold mr-1" />
                    <span className="text-sm">{room.size}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gold mr-1" />
                    <span className="text-sm">Max: {room.capacity}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{room.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Bed Type:</h3>
                  <p>{room.bedType}</p>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-3xl font-bold text-gold">₹{room.price}</p>
                    <p className="text-sm text-gray-500">per night</p>
                  </div>
                  <Link 
                    to={`/booking?room=${room.id}`} 
                    className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 font-medium"
                  >
                    Book Now
                  </Link>
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => {
                    const el = document.getElementById('room-amenities');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full border-maroon text-maroon hover:bg-maroon hover:text-white"
                >
                  View All Amenities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Details Tabs */}
      <section className="py-16" id="room-amenities">
        <div className="container-custom">
          <Tabs defaultValue="description">
            <TabsList className="w-full bg-ivory border-b border-gray-200">
              <TabsTrigger value="description" className="text-lg">Description</TabsTrigger>
              <TabsTrigger value="amenities" className="text-lg">Amenities</TabsTrigger>
              <TabsTrigger value="policies" className="text-lg">Policies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="py-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-serif mb-4">About this room</h2>
                <p className="text-gray-700 leading-relaxed">
                  {room.longDescription}
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="amenities" className="py-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-serif mb-4">Room Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-gold mr-2" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="policies" className="py-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-serif mb-4">Room Policies</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">Check-in & Check-out</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Check-in time: 2:00 PM onwards</li>
                      <li>Check-out time: Up to 12:00 PM</li>
                      <li>Early check-in and late check-out on request (charges may apply)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Cancellation Policy</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Free cancellation up to 48 hours before check-in</li>
                      <li>Cancellations within 48 hours will be charged one night's stay</li>
                      <li>No-shows will be charged the full amount of the reservation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Additional Information</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Valid ID proof required at check-in</li>
                      <li>Pets are not allowed</li>
                      <li>Extra bed available on request at ₹1000 per night</li>
                      <li>Children under 5 years stay free when using existing bedding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Other Rooms Section */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto">Explore Other Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {rooms
              .filter(r => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => (
                <div key={otherRoom.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={otherRoom.images[0]} 
                      alt={otherRoom.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg">{otherRoom.name}</h3>
                      <p className="text-gold font-bold">₹{otherRoom.price}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <Link 
                        to={`/rooms/${otherRoom.id}`} 
                        className="text-maroon hover:text-maroon-dark font-medium"
                      >
                        View Details
                      </Link>
                      <Link 
                        to={`/booking?room=${otherRoom.id}`} 
                        className="bg-maroon text-white px-3 py-1 rounded-sm text-sm hover:bg-maroon-dark"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="py-10 bg-maroon">
        <div className="container-custom text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h2 className="text-2xl font-serif font-bold">Ready to book your stay?</h2>
              <p>Experience the comfort and luxury of our {room.name}.</p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-white hover:bg-gray-100 text-maroon">
                <Calendar className="mr-2 h-4 w-4" /> Check Availability
              </Button>
              <Link 
                to={`/booking?room=${room.id}`} 
                className="bg-gold hover:bg-gold-dark text-charcoal px-6 py-2 rounded font-medium transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetailPage;
