
import { Link } from "react-router-dom";
import { Calendar, Users, MapPin, SquareIcon } from "lucide-react";

const EventsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://source.unsplash.com/photo-1469371670807-013ccf25f16a')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Events & Conferences
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Host your special occasions in our elegant venues, equipped with modern amenities and supported by our dedicated event planning team.
            </p>
          </div>
        </div>
      </section>

      {/* Venues Overview */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Our Event Spaces</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Grand Ballroom */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://source.unsplash.com/photo-1519167758481-83f550bb49b3" 
                  alt="Grand Ballroom" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">Grand Ballroom</h3>
                <p className="text-gray-600 mb-4">Perfect for weddings, galas, and large corporate events with elegant decor and state-of-the-art facilities.</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-gold mr-1" />
                    <span>Capacity: 300 guests</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <SquareIcon className="h-4 w-4 text-gold mr-1" />
                    <span>5000 sq ft</span>
                  </div>
                </div>
                
                <Link 
                  to="#grand-ballroom-details" 
                  className="text-center py-2 border-2 border-maroon text-maroon font-medium rounded transition-colors hover:bg-maroon hover:text-white w-full block"
                >
                  View Details
                </Link>
              </div>
            </div>
            
            {/* Conference Hall */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://source.unsplash.com/photo-1517457373958-b7bdd4587205" 
                  alt="Conference Hall" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">Conference Hall</h3>
                <p className="text-gray-600 mb-4">Ideal for business meetings, seminars, and presentations with professional setup and tech support.</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-gold mr-1" />
                    <span>Capacity: 150 guests</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <SquareIcon className="h-4 w-4 text-gold mr-1" />
                    <span>2500 sq ft</span>
                  </div>
                </div>
                
                <Link 
                  to="#conference-hall-details" 
                  className="text-center py-2 border-2 border-maroon text-maroon font-medium rounded transition-colors hover:bg-maroon hover:text-white w-full block"
                >
                  View Details
                </Link>
              </div>
            </div>
            
            {/* Banquet Hall */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://source.unsplash.com/photo-1562008752-2914d3a8e809" 
                  alt="Banquet Hall" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">Banquet Hall</h3>
                <p className="text-gray-600 mb-4">Suitable for intimate celebrations, family gatherings, and small corporate events in a warm ambiance.</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-gold mr-1" />
                    <span>Capacity: 80 guests</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <SquareIcon className="h-4 w-4 text-gold mr-1" />
                    <span>1200 sq ft</span>
                  </div>
                </div>
                
                <Link 
                  to="#banquet-hall-details" 
                  className="text-center py-2 border-2 border-maroon text-maroon font-medium rounded transition-colors hover:bg-maroon hover:text-white w-full block"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://source.unsplash.com/photo-1464366400600-7168b8af9bc3" 
                alt="Wedding Venue" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Dream Weddings</h2>
              <p className="text-gray-700 mb-6">
                Make your special day truly memorable at RD Hotels. Our dedicated wedding planning team ensures every detail is perfect, from decoration to catering, creating an experience that reflects your unique love story.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <p>Customizable wedding packages</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <p>Elegant venues with stunning backdrops</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <p>Expert coordination for seamless ceremonies</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <p>Exquisite catering with customizable menus</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <p>Special accommodation rates for guests</p>
                </div>
              </div>
              <Link 
                to="#wedding-inquiry" 
                className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 inline-flex items-center"
              >
                Plan Your Wedding
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Corporate Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">Business Meetings</h3>
              <p className="text-gray-600 mb-4">
                Professionally equipped spaces for productive business discussions and decision-making sessions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Boardroom setup with A/V equipment
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  High-speed internet access
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Presentation tools and stationery
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Refreshments and catering options
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">Conferences & Seminars</h3>
              <p className="text-gray-600 mb-4">
                Versatile venues for knowledge sharing, networking, and professional development programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Flexible seating arrangements
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Advanced sound and projection systems
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Registration and exhibit areas
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Customizable break sessions
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">Team Retreats</h3>
              <p className="text-gray-600 mb-4">
                Create meaningful connections and boost team morale with our specially designed retreat packages.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Team-building activities
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Recreational facilities access
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Special group dining options
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Accommodation packages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Inquiry Form */}
      <section id="wedding-inquiry" className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="section-title text-center mx-auto mb-8">Event Inquiry</h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below and our events team will contact you to discuss your specific requirements.
          </p>
          
          <form className="bg-ivory p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                />
              </div>
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                <select 
                  id="eventType" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday/Anniversary</option>
                  <option value="social">Social Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Tentative Date</label>
                <input 
                  type="date" 
                  id="eventDate" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                />
              </div>
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">Expected Guest Count</label>
                <input 
                  type="number" 
                  id="guestCount" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
              <textarea 
                id="requirements" 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-maroon hover:bg-maroon-dark text-white py-3 rounded-md transition-colors duration-300 font-medium"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Let's Plan Your Next Event
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our dedicated events team to make your occasion special and memorable.
          </p>
          <Link to="/contact" className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Contact Events Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
