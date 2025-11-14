import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Carousel from '../components/Carousel';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="blog-page"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.button 
        className="blog-back-button"
        onClick={() => navigate('/')}
        aria-label="Back to home"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ← BACK
      </motion.button>
      
      <motion.div 
        className="blog-carousel-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Carousel
          baseWidth={500}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={true}
        />
      </motion.div>
    </motion.div>
  );
};

export default Blog;

