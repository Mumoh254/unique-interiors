import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../widgets/watsapp';
import Testimonials from './testmonials';
import FAQ from './faq';
import ProjectTypes from './types';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="video-overlay"></div>
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/videos/comp.mp4" type="video/mp4" />
        </video>

        <div className="content-overlay">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="main-heading">
              Transform Your Space<br />with Modern Elegance
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="custom-btn quote-btn" onClick={() => navigate('/quote')}>
                Get a Quote
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="custom-btn" onClick={() => navigate('/consultation')}>
                Book Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Thin Arrow with "Explore More" Text */}
        <div className="explore-more">
          <span>Explore More</span>
          <div className="thin-arrow"></div>
        </div>

        <WhatsAppWidget />
      </div>

      <ProjectTypes />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;