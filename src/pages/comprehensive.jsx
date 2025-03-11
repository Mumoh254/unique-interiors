import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHammer, FaWater, FaCouch, FaPaintRoller, FaTools } from "react-icons/fa";
import backgroundImage from "/images/kitchen.jpg"; // Replace with actual image path
import topBackground from "/images/main.jpg"; // Replace with actual image path

const ComprehensivePackage = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/quote");
  }, [navigate]);

  const services = useMemo(
    () => [
      { icon: <FaHammer />, text: "Interior Design" },
      { icon: <FaWater />, text: "Plumbing Services" },
      { icon: <FaCouch />, text: "Custom Cabinets" },
      { icon: <FaPaintRoller />, text: "Tiling & Painting" },
      { icon: <FaTools />, text: "General Maintenance" },
    ],
    []
  );

  return (
    <div className="comprehensive-package">
      {/* Hero Section */}
      <div className="hero-section position-relative text-center text-white d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        <div className="container position-relative">
          <h2 className="fw-bold display-4">Excited for a House Makeover?</h2>
          <p className="lead">Let’s bring your dream home to life with our expert services.</p>
          <button className="btn2 mt-3 px-4 py-2 rounded-pill" onClick={handleNavigate}>
            Get a Free Quote 🚀
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section  py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-uppercase mb-4">Our House Packages</h2>
          <div className="row justify-content-center">
            {services.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-4 service-card" onClick={handleNavigate}>
                <div className="icon-box">{item.icon}</div>
                <span className="mt-2 d-block">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .hero-section {
          background: url(${topBackground}) no-repeat center center/cover;
          min-height: 400px;
          position: relative;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
        }
        .service-card {
          transition: transform 0.3s ease-in-out;
          cursor: pointer;
          text-align: center;
        }
        .service-card:hover {
          transform: scale(1.1);
        }
        .icon-box {
          background: rgba(255, 255, 255, 0.2);
          padding: 15px;
          border-radius: 50%;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease-in-out;
        }
        .service-card:hover .icon-box {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ComprehensivePackage;