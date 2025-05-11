
import { Link } from 'react-router-dom';
import { CalendarDays, Users, Check, MapPin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EventsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Events & Celebrations
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Create unforgettable moments in our versatile venues perfect for weddings, corporate events, and special occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Event Spaces Section */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Our Event Spaces</h2>
          
          <Tabs defaultValue="banquet" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="banquet" className="text-lg">Banquet Hall</TabsTrigger>
              <TabsTrigger value="conference" className="text-lg">Conference Rooms</TabsTrigger>
              <TabsTrigger value="outdoor" className="text-lg">Outdoor Space</TabsTrigger>
            </TabsList>
            
            <TabsContent value="banquet" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-serif mb-4">Grand Celebration Hall</h3>
                  <p className="text-gray-700 mb-6">
                    Our largest venue features elegant décor, state-of-the-art lighting, and premium sound systems ideal for weddings, galas and large celebrations. The versatile space can be configured in various layouts to suit your specific requirements.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Location:</p>
                        <p className="text-gray-600">Ground Floor, East Wing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Capacity:</p>
                        <p className="text-gray-600">
                          Theatre Style: 300 guests<br />
                          Banquet Style: 200 guests<br />
                          Reception Style: 350 guests
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Amenities:</p>
                        <p className="text-gray-600">High-speed WiFi, Premium AV equipment, Stage, Dance floor, Custom lighting</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 inline-flex items-center"
                  >
                    Inquire About Booking
                  </Link>
                </div>
                <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098" 
                    alt="Grand Celebration Hall" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="conference" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-serif mb-4">Executive Conference Rooms</h3>
                  <p className="text-gray-700 mb-6">
                    Our three professionally designed conference rooms offer sophisticated environments for business meetings, workshops, and corporate events. Each room is equipped with the latest technology to ensure productive and seamless presentations.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Location:</p>
                        <p className="text-gray-600">First Floor, Business Center</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Capacity:</p>
                        <p className="text-gray-600">
                          Boardroom Style: 20-40 guests<br />
                          U-Shape: 15-30 guests<br />
                          Classroom Style: 25-50 guests
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Amenities:</p>
                        <p className="text-gray-600">Video conferencing, Interactive displays, Whiteboard walls, Ergonomic seating, Coffee service</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 inline-flex items-center"
                  >
                    Inquire About Booking
                  </Link>
                </div>
                <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2125" 
                    alt="Executive Conference Room" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="outdoor" className="focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-serif mb-4">Garden Terrace</h3>
                  <p className="text-gray-700 mb-6">
                    Our beautifully landscaped garden terrace offers a serene outdoor setting for cocktail receptions, intimate weddings, and social gatherings. The space features lush greenery, ambient lighting, and spectacular views, creating a magical atmosphere for your event.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Location:</p>
                        <p className="text-gray-600">Fourth Floor, Rooftop</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Capacity:</p>
                        <p className="text-gray-600">
                          Standing Reception: 150 guests<br />
                          Seated Dinner: 100 guests<br />
                          Ceremony: 120 guests
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium">Amenities:</p>
                        <p className="text-gray-600">Weather contingency plans, Outdoor sound system, String lighting, Portable bars, Covered sections</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 inline-flex items-center"
                  >
                    Inquire About Booking
                  </Link>
                </div>
                <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070" 
                    alt="Garden Terrace" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Perfect for Every Occasion</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-maroon/10 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069" 
                  alt="Wedding Icon" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-serif text-xl mb-3">Weddings</h3>
              <p className="text-gray-600 mb-4">
                Create the wedding of your dreams with our customizable packages, gourmet catering, and dedicated wedding coordinator.
              </p>
              <ul className="text-sm space-y-2 text-left mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Complete wedding planning services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Custom menu creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Decoration and floral arrangements</span>
                </li>
              </ul>
              <Link to="/contact" className="text-maroon font-medium hover:text-maroon-dark">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-ivory p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-maroon/10 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" 
                  alt="Corporate Event Icon" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-serif text-xl mb-3">Corporate Events</h3>
              <p className="text-gray-600 mb-4">
                Host successful business meetings, conferences, and team-building events with our professional facilities and service.
              </p>
              <ul className="text-sm space-y-2 text-left mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Full technical support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Breakout session rooms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Executive catering packages</span>
                </li>
              </ul>
              <Link to="/contact" className="text-maroon font-medium hover:text-maroon-dark">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-ivory p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-maroon/10 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070" 
                  alt="Social Event Icon" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-serif text-xl mb-3">Social Celebrations</h3>
              <p className="text-gray-600 mb-4">
                Mark special milestones with family and friends in our elegant venues, perfect for birthdays, anniversaries, and reunions.
              </p>
              <ul className="text-sm space-y-2 text-left mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Customizable celebration packages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Entertainment coordination</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-gold mr-2 mt-0.5" />
                  <span>Special accommodation rates for guests</span>
                </li>
              </ul>
              <Link to="/contact" className="text-maroon font-medium hover:text-maroon-dark">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Packages */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-4">Event Services</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Our experienced event planning team ensures every detail is perfectly executed, creating memorable experiences for you and your guests.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2024" 
                alt="Event Planning Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-6">Comprehensive Event Support</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium text-lg mb-2">Dedicated Event Coordinator</h4>
                  <p className="text-gray-600">
                    Your personal point of contact throughout the planning process and event execution
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium text-lg mb-2">Gourmet Catering</h4>
                  <p className="text-gray-600">
                    Customizable menus featuring international and local cuisine prepared by our executive chefs
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium text-lg mb-2">Audiovisual Excellence</h4>
                  <p className="text-gray-600">
                    State-of-the-art sound, lighting, and presentation equipment with technical support
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium text-lg mb-2">Décor & Setup</h4>
                  <p className="text-gray-600">
                    Customized room layouts, elegant table settings, and themed decoration options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Upcoming Public Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory rounded-lg overflow-hidden shadow-md">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070" 
                  alt="New Year's Eve Gala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gold mb-2">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <span className="font-medium">December 31, 2025</span>
                </div>
                <h3 className="font-serif text-xl mb-2">New Year's Eve Gala</h3>
                <p className="text-gray-600 mb-4">
                  Ring in the New Year with an elegant dinner, live music, dancing, and midnight champagne toast.
                </p>
                <Link to="/contact" className="text-maroon font-medium hover:text-maroon-dark inline-block">
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="bg-ivory rounded-lg overflow-hidden shadow-md">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2080" 
                  alt="Food & Wine Festival" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gold mb-2">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <span className="font-medium">February 15-16, 2025</span>
                </div>
                <h3 className="font-serif text-xl mb-2">Food & Wine Festival</h3>
                <p className="text-gray-600 mb-4">
                  Experience culinary delights and fine wines from across India in our weekend gastronomy celebration.
                </p>
                <Link to="/contact" className="text-maroon font-medium hover:text-maroon-dark inline-block">
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="bg-ivory rounded-lg overflow-hidden shadow-md">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070" 
                  alt="Wedding Showcase" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gold mb-2">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <span className="font-medium">March 8, 2025</span>
                </div>
                <h3 className="font-serif text-xl mb-2">Wedding Showcase</h3>
                <p className="text-gray-600 mb-4">
                  Meet wedding vendors, explore our venues, and sample menu options at our bridal exhibition.
                </p>
                <Link to="/contact" className="text-maroon font-medium hover:text-maroon-dark inline-block">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our events team to discuss your requirements and let us help create an unforgettable experience.
          </p>
          <Link to="/contact" className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Request a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
