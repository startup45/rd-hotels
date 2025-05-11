
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Utensils, Wine } from "lucide-react";

const DiningPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Dining Experiences
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Indulge in exquisite culinary delights at our restaurants and bars, where every meal becomes a memorable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Suvai Multicuisine Restaurant</h2>
              <p className="text-gray-700 mb-6">
                Experience the finest flavors from around the world at our signature restaurant. Our talented chefs craft dishes that combine traditional recipes with modern techniques, using locally sourced ingredients for an authentic taste.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Utensils className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Cuisine Types:</p>
                    <p className="text-gray-600">Indian, Chinese, Continental, Italian</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Opening Hours:</p>
                    <p className="text-gray-600">
                      Breakfast: 7:00 AM - 10:30 AM<br />
                      Lunch: 12:30 PM - 3:00 PM<br />
                      Dinner: 7:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Location:</p>
                    <p className="text-gray-600">Ground Floor, Main Building</p>
                  </div>
                </div>
              </div>
              <Link 
                to="#" 
                className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 inline-flex items-center"
              >
                View Menu
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070" 
                alt="Suvai Restaurant" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070" 
                alt="Chill & Chip Bar" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-bold mb-4">Chill & Chip Bar</h2>
              <p className="text-gray-700 mb-6">
                Unwind in our stylish bar featuring a curated selection of premium spirits, wines, and innovative cocktails. The perfect setting for casual meetings or relaxing evenings with friends and colleagues.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Wine className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Specialties:</p>
                    <p className="text-gray-600">Craft Cocktails, Indian & Imported Spirits, Fine Wines</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Opening Hours:</p>
                    <p className="text-gray-600">
                      Monday - Sunday: 1:00 PM - 11:30 PM<br />
                      Happy Hours: 4:00 PM - 7:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Reservations:</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>
              <Link 
                to="#" 
                className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 inline-flex items-center"
              >
                Drinks Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Room Service Section */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">In-Room Dining</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Enjoy our restaurant offerings in the comfort and privacy of your room with our 24/7 room service.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl mb-2">24/7 Service</h3>
                <p className="text-gray-600">
                  Order from our extensive menu any time of day or night for prompt delivery to your room.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl mb-2">Full Menu Access</h3>
                <p className="text-gray-600">
                  Choose from the same quality dishes available in our restaurant, prepared with equal care.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl mb-2">Easy Ordering</h3>
                <p className="text-gray-600">
                  Simply dial room service from your in-room phone for a seamless dining experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Make a Reservation
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Secure your table at our restaurants for a memorable dining experience.
          </p>
          <Link to="/contact" className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Reserve a Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DiningPage;
