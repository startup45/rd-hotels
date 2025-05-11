
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif mb-4">RD Hotels</h3>
            <p className="text-gray-300 mb-4">
              Experience luxury and comfort in the heart of Perundurai. Our premium hotel offers exceptional service and modern amenities.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['Rooms & Suites', '/rooms'],
                ['Dining', '/dining'],
                ['Events & Conferences', '/events'],
                ['Gallery', '/gallery'],
                ['About Us', '/about'],
                ['Contact', '/contact'],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-300 hover:text-gold transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gold" />
                <span className="text-gray-300">
                  123 Main Road, Perundurai, Erode District, Tamil Nadu, India - 638052
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold" />
                <a href="mailto:info@rdhotels.com" className="text-gray-300 hover:text-gold transition-colors">
                  info@rdhotels.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-gold" />
                <div>
                  <p className="text-gray-300">
                    <span className="font-medium">Front Desk:</span> 24/7
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-gold" />
                <div>
                  <p className="text-gray-300">
                    <span className="font-medium">Suvai Restaurant:</span>
                    <br />
                    Breakfast: 7:00 AM - 10:30 AM
                    <br />
                    Lunch: 12:30 PM - 3:00 PM
                    <br />
                    Dinner: 7:00 PM - 11:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-gold" />
                <div>
                  <p className="text-gray-300">
                    <span className="font-medium">Chill & Chip Bar:</span>
                    <br />
                    5:00 PM - 11:30 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} RD Hotels. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
