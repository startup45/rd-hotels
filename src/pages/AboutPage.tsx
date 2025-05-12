
import { Link } from "react-router-dom";
import { Star, Award, Heart, Clock, User } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2070')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              About RD Hotels
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Where luxury meets comfort and every stay becomes a memorable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, RD Hotels began with a vision to create a hospitality experience that perfectly balances luxury with the warmth of traditional Tamil hospitality. What started as a modest establishment in Perundurai has now evolved into one of the region's most respected hotel brands.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been guided by a commitment to excellence and a deep understanding of our guests' needs. Over the years, we have continuously evolved and expanded, but our core values remain unchanged: exceptional service, attention to detail, and creating memorable experiences for every guest.
              </p>
              <p className="text-gray-700">
                Today, RD Hotels stands as a symbol of quality and luxury in Perundurai, catering to business travelers, tourists, and locals celebrating special occasions. Our success is built on the trust and satisfaction of our guests, many of whom return time and again for the RD Hotels experience.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551776235-dde6d482980b?q=80&w=2070" 
                alt="RD Hotels Lobby" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from the quality of our rooms to the food we serve and the experiences we create.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3">Hospitality</h3>
              <p className="text-gray-600">
                True hospitality comes from the heart. We embrace the tradition of treating guests like family, ensuring a warm and welcoming atmosphere.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in conducting our business with honesty, transparency, and ethical practices that build trust with our guests and partners.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve and innovate to meet the changing needs of our guests while preserving the timeless aspects of exceptional hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=2070" 
                  alt="Deepa Ramachandran" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-1">Deepa Ramachandran</h3>
                <p className="text-gold mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With over 25 years of experience in the hospitality industry, Deepa's vision and leadership have been instrumental in establishing RD Hotels as a premium hospitality brand.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070" 
                  alt="Arun Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-1">Arun Kumar</h3>
                <p className="text-gold mb-4">General Manager</p>
                <p className="text-gray-600 mb-4">
                  Arun's meticulous attention to detail and guest-centric approach ensures that every aspect of hotel operations exceeds our guests' expectations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070" 
                  alt="Priya Subramaniam" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-1">Priya Subramaniam</h3>
                <p className="text-gold mb-4">Head Chef</p>
                <p className="text-gray-600 mb-4">
                  A culinary artist with a passion for blending traditional flavors with contemporary techniques, Priya leads our talented kitchen team to create memorable dining experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Our Achievements</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl mb-6">Awards & Recognition</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Best Luxury Hotel in Tamil Nadu</p>
                      <p className="text-sm text-gray-600">Tourism Excellence Awards, 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Outstanding Customer Service</p>
                      <p className="text-sm text-gray-600">Hospitality Leaders Association, 2021</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Best Hotel Restaurant - South India</p>
                      <p className="text-sm text-gray-600">Food & Beverage Excellence Awards, 2020</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Green Hotel Certification</p>
                      <p className="text-sm text-gray-600">Eco-Tourism Council of India, 2019</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl mb-6">Key Milestones</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">2005</p>
                      <p className="text-gray-600">Opening of RD Hotels in Perundurai with 30 rooms</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">2010</p>
                      <p className="text-gray-600">Expansion to 50 rooms and addition of Suvai Restaurant</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">2015</p>
                      <p className="text-gray-600">Completed major renovation and added conference facilities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-gold mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">2020</p>
                      <p className="text-gray-600">Celebrated 15 years of excellence in hospitality</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070" 
                alt="Community Involvement" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Commitment to Community</h2>
              <p className="text-gray-700 mb-4">
                At RD Hotels, we believe in being responsible corporate citizens and actively contribute to the welfare of our local community in Perundurai and beyond.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Local Employment</p>
                    <p className="text-gray-600">
                      We prioritize hiring from the local community, providing employment opportunities and professional development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Education Initiatives</p>
                    <p className="text-gray-600">
                      We support local schools and offer hospitality training programs for young adults.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-3 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Environmental Sustainability</p>
                    <p className="text-gray-600">
                      Our eco-friendly practices include water conservation, waste reduction, and energy efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Experience Our Hospitality
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We invite you to stay with us and experience the warmth, luxury, and exceptional service that define RD Hotels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Book Your Stay
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-maroon px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
