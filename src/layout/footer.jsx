import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

// Lazy-loaded icons
const FaFacebook = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaFacebook })));
const FaInstagram = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaInstagram })));
const FaPinterest = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaPinterest })));
const FaLinkedin = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaLinkedin })));
const FaMapMarkerAlt = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaMapMarkerAlt })));

const Footer = () => {
  return (
    <>
      {/* Hero Section Before Footer */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url('/images/hose.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay p-4">
          <h2 className="hero-text">Bring Your Future to Life with Us</h2>
          <p className="hero-subtext">
            Transform your space with our innovative designs and expert craftsmanship.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-content">
          {/* Contact Section */}
          <div className="footer-section">
            <h4>Unique Interiors LTD</h4>
            <address className="contact-info">
              <p>
                <Suspense fallback={<span>📍</span>}><FaMapMarkerAlt /></Suspense> Kenya, Nairobi
              </p>
              <p>Tel: <a href="tel:+254710772575">+254710772575</a></p>
              <p>Email: <a href="mailto:uniqueinteriors@gmail.com">uniqueinteriors@gmail.com</a></p>
            </address>

            {/* Google Maps Embed */}
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3586903801!2d36.6825803462532!3d-1.3028602815090562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  filter: "grayscale(40%) contrast(1.2) brightness(1.1)",
                  borderRadius: "10px",
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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/catalogs">Catalogs</Link></li>
              <li><Link to="/consultation">Book Consultation</Link></li>
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
              <Suspense fallback={<span>🔗</span>}><a href="https://www.facebook.com/share/1AR5WRjHPb/"><FaFacebook /></a></Suspense>
              <Suspense fallback={<span>🔗</span>}><a href="#"><FaInstagram /></a></Suspense>
              <Suspense fallback={<span>🔗</span>}><a href="#"><FaPinterest /></a></Suspense>
              <Suspense fallback={<span>🔗</span>}><a href="#"><FaLinkedin /></a></Suspense>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom py-4">
          <div className="legal-links">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/protected">Protected</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/terms">Warranty</Link>
            <Link to="/upcoming">Upcoming</Link>
          </div>
          <p className="py-3">
            © {new Date().getFullYear()} Unique Interiors Limited | All rights reserved | Unauthorized duplication or distribution is prohibited.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
