import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Hero Section Before Footer */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url('/images/footer.png')`, // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay p-4">
          <h2 className="hero-text">Bring Your Future to Life with Us</h2>
          <p className="hero-subtext">Transform your space with our innovative designs and expert craftsmanship.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-content">
          {/* Contact Section */}
          <div className="footer-section">
            <h4>Unique Interiors LTD</h4>
            <address className="contact-info">
              <p><FaMapMarkerAlt /> Kenya, Nairobi</p>
              <p>Tel: <a href="tel:+254710772575">+254710772575</a></p>
              <p>Email: <a href="mailto:info@hesebeck.de">uniqueinteriors@gmail.com</a></p>
            </address>

            {/* Direct Map Embed */}
            <div className="map-container">
            <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586903801!2d36.6825803462532!3d-1.3028602815090562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske"
  width="100%"
  height="450"
  style={{ 
    border: 0, 
    filter: "grayscale(40%) contrast(1.2) brightness(1.1)", // Balanced filter
    borderRadius: "10px" // Optional rounded corners
  }} 
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/process">Our Process</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/catalogs">Catalogs</a></li>
              <li><a href="/consultation">Book Consultation</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for design insights and exclusive offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterest /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom py-4">
          <div className="legal-links">
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
            <a href="/protected">Protected</a>
            <a href="/faq">FAQ</a>
            <a href="/terms">Warranty</a>
            <a href="/upcoming">Upcoming</a>
          </div>
          <p className=" py-3 " >© {new Date().getFullYear()} Unique Interiors Limited | All rights reserved | Unauthorized duplication or distribution is prohibited.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
