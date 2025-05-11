
import { Link } from 'react-router-dom';

const BookNowButton = () => {
  return (
    <Link to="/booking" className="floating-book-now">
      Book Your Stay
    </Link>
  );
};

export default BookNowButton;
