
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-maroon mb-4">404</h1>
        <p className="text-xl md:text-2xl text-charcoal mb-8">Oops! We couldn't find the page you're looking for</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you requested may have been moved or deleted, or you might have typed the wrong URL.
        </p>
        <Link 
          to="/" 
          className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium inline-block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
