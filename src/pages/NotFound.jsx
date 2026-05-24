import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="not-found-label">Page Not Found</span>
          <h1 className="not-found-code">404</h1>
          <p className="not-found-message">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/shop" className="btn btn-outline">Browse Shop</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
