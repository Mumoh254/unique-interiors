import React, { lazy, Suspense, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import  ComprehensivePackage  from './comprehensive'

// Lazy load less important components
const Testimonials = lazy(() => import('./testmonials')); // Lazy load Testimonials component
const FAQ = lazy(() => import('./faq')); // Lazy load FAQ component

// Immediately load essential components
const WhatsAppWidget = lazy(() => import('../widgets/watsapp')); // Lazy load WhatsApp widget
const ProjectTypes = lazy(() => import('./types')); // Lazy load Project Types component

const Home = () => {
  const navigate = useNavigate();

  const handleGetQuote = useCallback(() => {
    navigate('/quote');
  }, [navigate]);

  const handleBookConsultation = useCallback(() => {
    navigate('/consultation');
  }, [navigate]);

  return (
    <>
      <div className="home-container">
        <div className="video-overlay">  </div>
        <video 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="background-video" 
  preload="none" 
  poster="/images/kitchen.jpg"
>
  <source src="/videos/comp.mp4" type="video/mp4" />
</video>


        <div className="content-overlay">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="main-heading">Transform Your Space<br />with Modern Elegance</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="sub-text">Where Innovation Meets Timeless Design</p>
          </motion.div>

          <motion.div
            className="button-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="custom-btn" onClick={handleGetQuote}>Get a Quote</button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="custom-btn" onClick={handleBookConsultation}>Book Consultation</button>
            </motion.div>
          </motion.div>
        </div>

        <div className="explore-more">
          <span>Explore More</span>
          <div className="thin-arrow"></div>
        </div>
      </div>

<ComprehensivePackage />
  
      <Suspense fallback={<div>Loading WhatsApp Widget...</div>}>
        <WhatsAppWidget />
      </Suspense>

      <Suspense fallback={<div>Loading Project Types...</div>}>
        <ProjectTypes />
      </Suspense>

    
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div>Loading FAQ...</div>}>
        <FAQ />
      </Suspense>
    </>
  );
};

export default Home;
