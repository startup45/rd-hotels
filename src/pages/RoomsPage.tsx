
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Wifi, Clock, Users } from 'lucide-react';

// Room data
const rooms = [
  {
    id: 'deluxe-ac',
    name: 'Deluxe A/C Room',
    description: 'Spacious air-conditioned room with modern amenities and elegant decor.',
    price: 4500,
    capacity: 2,
    size: '325 sq ft',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-screen TV', 'Private Bathroom', 'Room Service'],
    image: 'https://source.unsplash.com/photo-1649972904349-6e44c42644a7',
    featured: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Premium suite with separate living area, luxury bathroom, and stunning views.',
    price: 7500,
    capacity: 2,
    size: '500 sq ft',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-screen TV', 'Mini Bar', 'Separate Living Area', 'Premium Toiletries'],
    image: 'https://source.unsplash.com/photo-1721322800607-8c38375eef04',
    featured: true,
  },
  {
    id: 'standard-non-ac',
    name: 'Standard Non-A/C Room',
    description: 'Comfortable and affordable room with essential amenities for a pleasant stay.',
    price: 3000,
    capacity: 2,
    size: '275 sq ft',
    amenities: ['Ceiling Fan', 'Free Wi-Fi', 'TV', 'Private Bathroom', 'Daily Housekeeping'],
    image: 'https://source.unsplash.com/photo-1483058712412-4245e9b90334',
    featured: false,
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    description: 'Spacious suite designed for families with connecting rooms and extra amenities.',
    price: 9000,
    capacity: 4,
    size: '650 sq ft',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-screen TVs', 'Mini Bar', 'Connecting Rooms', 'Family Toiletries'],
    image: 'https://source.unsplash.com/photo-1472396961693-142e6e269027',
    featured: true,
  },
];

const RoomsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredRooms = filter === 'all' 
    ? rooms 
    : filter === 'ac' 
      ? rooms.filter(room => room.amenities.includes('Air Conditioning'))
      : rooms.filter(room => !room.amenities.includes('Air Conditioning'));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://source.unsplash.com/photo-1483058712412-4245e9b90334')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Rooms & Suites
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Choose from our range of elegantly designed rooms and luxurious suites, all equipped with modern amenities for your comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Listing */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filter */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 border border-gray-300 rounded-l-md ${
                  filter === 'all' 
                    ? 'bg-maroon text-white border-maroon' 
                    : 'bg-white text-charcoal hover:bg-gray-50'
                }`}
              >
                All Rooms
              </button>
              <button
                onClick={() => setFilter('ac')}
                className={`px-6 py-2 border-t border-b border-r border-gray-300 ${
                  filter === 'ac' 
                    ? 'bg-maroon text-white border-maroon' 
                    : 'bg-white text-charcoal hover:bg-gray-50'
                }`}
              >
                A/C Rooms
              </button>
              <button
                onClick={() => setFilter('non-ac')}
                className={`px-6 py-2 border-t border-b border-r border-gray-300 rounded-r-md ${
                  filter === 'non-ac' 
                    ? 'bg-maroon text-white border-maroon' 
                    : 'bg-white text-charcoal hover:bg-gray-50'
                }`}
              >
                Non-A/C Rooms
              </button>
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {room.featured && (
                    <div className="absolute top-0 right-0 bg-gold text-charcoal px-4 py-1 font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl">{room.name}</h3>
                    <div className="text-right">
                      <p className="text-gold font-bold text-xl">₹{room.price}</p>
                      <p className="text-sm text-gray-500">per night</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center text-sm">
                      <Bed className="h-4 w-4 text-gold mr-1" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-gold mr-1" />
                      <span>Max: {room.capacity} Guests</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Wifi className="h-4 w-4 text-gold mr-1" />
                      <span>Free Wi-Fi</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-gold mr-1" />
                      <span>24/7 Service</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to={`/rooms/${room.id}`} 
                      className="flex-1 text-center py-2 border-2 border-maroon text-maroon font-medium rounded transition-colors hover:bg-maroon hover:text-white"
                    >
                      View Details
                    </Link>
                    <Link 
                      to={`/booking?room=${room.id}`} 
                      className="flex-1 text-center py-2 bg-maroon text-white font-medium rounded transition-colors hover:bg-maroon-dark"
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
      
      {/* Room Policies */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto">Room Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-serif text-xl mb-4">Check-in & Check-out</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Check-in time: 2:00 PM onwards
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Check-out time: Up to 12:00 PM
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Early check-in and late check-out available on request, subject to availability
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-serif text-xl mb-4">Reservation & Cancellation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Advance booking required
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Free cancellation up to 48 hours before check-in
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Cancellations within 48 hours subject to one night's charge
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-serif text-xl mb-4">Additional Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Valid ID proof required at check-in
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Pets not allowed
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Extra bed available on request (additional charges apply)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book your stay now and enjoy our premium facilities and exceptional service.
          </p>
          <Link to="/booking" className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Book Your Room Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
