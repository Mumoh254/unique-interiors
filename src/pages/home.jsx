import React, { lazy, Suspense, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Lazy load components
const Testimonials = lazy(() => import('./testmonials'));
const FAQ = lazy(() => import('./faq'));
const WhatsAppWidget = lazy(() => import('../widgets/watsapp'));
const ProjectTypes = lazy(() => import('./types'));
const Consultation = lazy(() => import('./consoltation'));
const Quote = lazy(() => import('./quote'));

const Home = () => {
  const navigate = useNavigate();
  const [showQuote, setShowQuote] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);

  const handleGetQuote = useCallback(() => {
    setShowQuote(true);
  }, []);

  const handleBookConsultation = useCallback(() => {
    setShowConsultation(true);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="video-overlay"></div>
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="main-heading">Transform Your Space<br />with Modern Elegance</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <p className="sub-text">Where Innovation Meets Timeless Design.</p>
          </motion.div>

          <motion.div className="button-group" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 50, delay: 1.2 }}>
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

      {/* Always load WhatsApp and Project Types */}
      <Suspense fallback={<div>Loading WhatsApp Widget...</div>}>
        <WhatsAppWidget />
      </Suspense>

      <Suspense fallback={<div>Loading Project Types...</div>}>
        <ProjectTypes />
      </Suspense>

      {/* Conditional Rendering: Load Quote or Consultation only when needed */}
      {showQuote && (
        <Suspense fallback={<div>Loading Quote...</div>}>
          <Quote />
        </Suspense>
      )}

      {showConsultation && (
        <Suspense fallback={<div>Loading Consultation...</div>}>
          <Consultation />
        </Suspense>
      )}

      {/* Load Testimonials and FAQ normally */}
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
