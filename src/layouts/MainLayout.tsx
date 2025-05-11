
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Footer from '@/components/Footer';
import BookNowButton from '@/components/BookNowButton';

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll behavior for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-10">
            <h1 className={`font-serif font-bold text-2xl md:text-3xl transition-colors duration-300 ${
              isScrolled || mobileMenuOpen ? 'text-maroon' : 'text-white'
            }`}>
              RD <span className="text-gold">Hotels</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              ['Home', '/'],
              ['Rooms & Suites', '/rooms'],
              ['Dining', '/dining'],
              ['Events', '/events'],
              ['Amenities', '/amenities'],
              ['Gallery', '/gallery'],
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className={`font-medium hover:text-maroon transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                {name}
              </Link>
            ))}
            <Link to="/booking" className="btn-primary">
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10 text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-7 w-7 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
            ) : (
              <Menu className={`h-7 w-7 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-0 transition-transform duration-300 ease-in-out transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
              {[
                ['Home', '/'],
                ['Rooms & Suites', '/rooms'],
                ['Dining', '/dining'],
                ['Events', '/events'],
                ['Amenities', '/amenities'],
                ['Gallery', '/gallery'],
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="font-medium text-charcoal hover:text-maroon transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="btn-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Floating Book Now Button */}
      <BookNowButton />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
