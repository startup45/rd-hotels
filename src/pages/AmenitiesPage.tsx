
import { Clock, Wifi, Coffee, UtensilsCrossed, Car, Bath, Waves, Dumbbell } from "lucide-react";

const AmenitiesPage = () => {
  // Amenities data
  const amenities = [
    {
      id: 1,
      name: "24/7 Room Service",
      description: "Enjoy meals and refreshments in the comfort of your room any time of day or night.",
      icon: <Clock className="h-10 w-10 text-gold" />,
      category: "in-room",
    },
    {
      id: 2,
      name: "High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet access throughout the hotel.",
      icon: <Wifi className="h-10 w-10 text-gold" />,
      category: "in-room",
    },
    {
      id: 3,
      name: "Coffee Shop",
      description: "Grab a quick coffee, light snack or dessert at our cozy café open from 8 AM to 10 PM.",
      icon: <Coffee className="h-10 w-10 text-gold" />,
      category: "dining",
    },
    {
      id: 4,
      name: "Multi-cuisine Restaurant",
      description: "Savor delicious dishes from Indian, Chinese, and Continental cuisines at our restaurant.",
      icon: <UtensilsCrossed className="h-10 w-10 text-gold" />,
      category: "dining",
    },
    {
      id: 5,
      name: "Travel Desk",
      description: "Let us help arrange your local transportation, tours, and travel requirements.",
      icon: <Car className="h-10 w-10 text-gold" />,
      category: "services",
    },
    {
      id: 6,
      name: "Laundry Service",
      description: "Keep your clothes fresh with our efficient laundry and dry-cleaning services.",
      icon: <Bath className="h-10 w-10 text-gold" />,
      category: "services",
    },
    {
      id: 7,
      name: "Swimming Pool",
      description: "Take a refreshing dip in our outdoor swimming pool with a separate children's section.",
      icon: <Waves className="h-10 w-10 text-gold" />,
      category: "recreation",
    },
    {
      id: 8,
      name: "Fitness Center",
      description: "Maintain your fitness routine in our well-equipped gym with modern exercise equipment.",
      icon: <Dumbbell className="h-10 w-10 text-gold" />,
      category: "recreation",
    },
  ];

  // Group amenities by category
  const grouped = amenities.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Category labels
  const categoryLabels = {
    "in-room": "In-Room Amenities",
    "dining": "Dining Facilities",
    "services": "Guest Services",
    "recreation": "Recreation & Wellness",
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://source.unsplash.com/photo-1578683010236-d716f9a3f461')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Hotel Amenities
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Experience comfort and convenience with our comprehensive range of facilities and services designed to enhance your stay.
            </p>
          </div>
        </div>
      </section>

      {/* All Amenities */}
      <section className="py-16">
        <div className="container-custom">
          <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            At RD Hotels, we take pride in offering you a seamless and enjoyable stay with our carefully curated amenities and services. From the moment you arrive until your departure, our staff is dedicated to ensuring your comfort and satisfaction.
          </p>
          
          {Object.keys(grouped).map((category) => (
            <div key={category} className="mb-16">
              <h2 className="section-title mb-8">{categoryLabels[category]}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {grouped[category].map((amenity) => (
                  <div key={amenity.id} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                    <div className="bg-ivory rounded-full p-4 mr-4">
                      {amenity.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl mb-2">{amenity.name}</h3>
                      <p className="text-gray-600">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Services */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Exclusive Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <h3 className="font-serif text-xl mb-4">Airport Transfers</h3>
              <p className="text-gray-600 mb-4">
                Travel comfortably to and from the airport with our premium transportation service, available upon request at additional charges.
              </p>
              <p className="text-sm text-maroon font-medium">
                Book 24 hours in advance
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <h3 className="font-serif text-xl mb-4">Business Center</h3>
              <p className="text-gray-600 mb-4">
                Access our fully equipped business center offering printing, scanning, and video conferencing facilities to meet your professional needs.
              </p>
              <p className="text-sm text-maroon font-medium">
                Open from 8 AM to 8 PM
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <h3 className="font-serif text-xl mb-4">Concierge Services</h3>
              <p className="text-gray-600 mb-4">
                Our knowledgeable concierge team is ready to assist with local recommendations, reservations, and special requests to enhance your stay.
              </p>
              <p className="text-sm text-maroon font-medium">
                Available 24/7 at the front desk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title text-center mx-auto mb-8">Accessibility Features</h2>
          <p className="text-center text-gray-600 mb-12">
            We are committed to providing a comfortable stay for all our guests. Our hotel includes several accessibility features:
          </p>
          
          <div className="bg-ivory p-8 rounded-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gold font-bold mr-3">•</span>
                <p>Wheelchair accessible rooms with wider doorways and adapted bathrooms</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold mr-3">•</span>
                <p>Elevator access to all floors</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold mr-3">•</span>
                <p>Ramp access to main entrance and public areas</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold mr-3">•</span>
                <p>Visual alarms and notifications in emergencies</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold mr-3">•</span>
                <p>Service animals welcome</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold font-bold mr-3">•</span>
                <p>Trained staff to assist guests with special needs</p>
              </li>
            </ul>
            
            <p className="mt-6 text-sm text-gray-600">
              For specific accessibility requirements or assistance, please contact our front desk in advance of your stay.
            </p>
          </div>
        </div>
      </section>

      {/* Family Services */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Family-Friendly Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://source.unsplash.com/photo-1577059023365-987129449762" 
                alt="Family Services" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                We welcome families and offer special services to ensure a pleasant stay for guests of all ages:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-3">•</span>
                  <div>
                    <p className="font-medium">Babysitting Services</p>
                    <p className="text-gray-600 text-sm">Arranged upon request with advance notice</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-3">•</span>
                  <div>
                    <p className="font-medium">Children's Menu</p>
                    <p className="text-gray-600 text-sm">Special kid-friendly options in our restaurant</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-3">•</span>
                  <div>
                    <p className="font-medium">Family Rooms</p>
                    <p className="text-gray-600 text-sm">Spacious accommodations for families with connecting room options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-3">•</span>
                  <div>
                    <p className="font-medium">Children's Play Area</p>
                    <p className="text-gray-600 text-sm">Indoor play space with toys and games</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-3">•</span>
                  <div>
                    <p className="font-medium">Cribs and Extra Beds</p>
                    <p className="text-gray-600 text-sm">Available upon request</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-maroon">
        <div className="container-custom max-w-4xl text-center">
          <div className="text-gold text-5xl mb-6">"</div>
          <p className="text-white text-xl italic mb-6">
            The amenities at RD Hotels went beyond our expectations. From the wonderful pool to the excellent room service, everything was designed to make our stay comfortable and enjoyable. The staff's attention to detail truly enhanced our experience.
          </p>
          <p className="text-gold font-serif text-lg">- Priya & Rahul, Chennai</p>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
