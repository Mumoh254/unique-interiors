import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import  WhatsAppWidget  from  '../widgets/watsapp'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="video-overlay"></div>
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/0306 (1)(1).mp4" type="video/mp4" />
      </video>

      <div className="content-overlay">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="main-heading">
            Transform Your Space<br/>with Modern Elegance
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="sub-text">
            Where Innovation Meets Timeless Design
          </p>
        </motion.div>

        <motion.div 
          className="button-group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 1.2 }}
        >
          <Button 
            className="cta-button quote-btn"
            onClick={() => navigate('/quote')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </Button>
          <Button 
            className="cta-button consult-btn"
            onClick={() => navigate('/consultation')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Consultation
          </Button>
        </motion.div>
      </div>
      <WhatsAppWidget />
    </div>
  );
};

export default Home;