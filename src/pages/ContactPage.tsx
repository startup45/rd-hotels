
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://source.unsplash.com/photo-1566665797739-1674de7a421a')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're here to assist you with any questions or inquiries about our hotel and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you have questions about our rooms, need help with a reservation, or want to provide feedback, our team is ready to assist you. Feel free to reach out to us using any of the contact methods below.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-ivory p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      123 Main Road, Perundurai,<br />
                      Erode District, Tamil Nadu,<br />
                      India - 638052
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ivory p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Phone</h3>
                    <p className="text-gray-600">
                      Reception: +91 98765 43210<br />
                      Reservations: +91 98765 43211<br />
                      Restaurant: +91 98765 43212
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ivory p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@rdhotels.com<br />
                      Reservations: reservations@rdhotels.com<br />
                      Events: events@rdhotels.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ivory p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Hours</h3>
                    <p className="text-gray-600">
                      Reception: 24/7<br />
                      Restaurant: 7:00 AM - 11:00 PM<br />
                      Room Service: 24/7
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-xl mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-ivory hover:bg-gold/20 p-3 rounded-full transition-colors duration-300">
                    <svg className="h-6 w-6 text-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-ivory hover:bg-gold/20 p-3 rounded-full transition-colors duration-300">
                    <svg className="h-6 w-6 text-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-ivory hover:bg-gold/20 p-3 rounded-full transition-colors duration-300">
                    <svg className="h-6 w-6 text-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-ivory hover:bg-gold/20 p-3 rounded-full transition-colors duration-300">
                    <svg className="h-6 w-6 text-maroon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-ivory p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-maroon hover:bg-maroon-dark text-white py-3 rounded-md transition-colors duration-300 font-medium flex justify-center items-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-8">Location & Directions</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="rounded-lg overflow-hidden h-[400px]">
              {/* Replace with actual Google Map embed */}
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Google Map will be embedded here</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">From Erode Junction</h3>
              <p className="text-gray-600 mb-2">
                RD Hotels is approximately 15 km from Erode Junction Railway Station.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• By Taxi: 25-30 minutes</li>
                <li>• By Bus: Take route 15A or 22C</li>
                <li>• Hotel shuttle available with advance booking</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">From Coimbatore Airport</h3>
              <p className="text-gray-600 mb-2">
                The hotel is about 70 km from Coimbatore International Airport.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• By Taxi: 1.5 hours</li>
                <li>• Airport shuttle service available</li>
                <li>• Advance booking recommended</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">Local Landmarks</h3>
              <p className="text-gray-600 mb-2">
                Our hotel is conveniently located near several key locations:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 2 km from Perundurai Bus Stand</li>
                <li>• 3 km from SIPCOT Industrial Park</li>
                <li>• 5 km from IRT Medical College</li>
                <li>• 8 km from Chennimalai Temple</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">Quick Contact Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-maroon text-white p-8 rounded-lg shadow-md flex items-center">
              <div className="bg-white/10 p-4 rounded-full mr-6">
                <Phone className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">Call Us Directly</h3>
                <p className="mb-4">For immediate assistance or reservations</p>
                <p className="font-bold text-xl">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="bg-gold text-charcoal p-8 rounded-lg shadow-md flex items-center">
              <div className="bg-charcoal/10 p-4 rounded-full mr-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">WhatsApp Support</h3>
                <p className="mb-4">Chat with our concierge team</p>
                <Link 
                  to="#" 
                  className="font-bold flex items-center"
                >
                  Message Us <Send className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-ivory">
        <div className="container-custom max-w-3xl">
          <h2 className="section-title text-center mx-auto mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-2">What are your check-in and check-out times?</h3>
              <p className="text-gray-600">
                Our standard check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be arranged based on availability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-2">Do you offer airport transfers?</h3>
              <p className="text-gray-600">
                Yes, we provide airport transfers from Coimbatore International Airport for an additional fee. Please contact our reservation team to arrange this service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-2">Is breakfast included in the room rate?</h3>
              <p className="text-gray-600">
                Breakfast is included in most of our room packages. Please check your specific booking details or contact us for confirmation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-2">How far is the hotel from the city center?</h3>
              <p className="text-gray-600">
                RD Hotels is centrally located in Perundurai, approximately 2 km from the main town center and bus stand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Experience Luxury at RD Hotels?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your stay now and discover the perfect blend of comfort, convenience, and exceptional service.
          </p>
          <Link to="/booking" className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Book Your Stay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
