import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHammer, FaWater, FaCouch, FaPaintRoller, FaTools } from "react-icons/fa";
import backgroundImage from "/images/kitchen.jpg"; // Replace with actual image path
import topImage from "/images/main.jpg"; // Replace with actual image path

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

  const topImageStyle = {
    width: "550px",
    maxWidth: "100%",
    marginRight: "20px",
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="mt-5">
      {/* Top Section */}
      <div className="container-fluid footer-container py-5 position-relative">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <img src={topImage} alt="Top Image" className="img-fluid  " style={topImageStyle} loading="lazy" />
          <div className="text-center text-md-start mt-4 mt-md-0">
            <h2 className="fw-bold">Interested in a Comprehensive House Package?</h2>
            <p>Our team is ready to serve you with top-notch services.</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container-fluid bg-primary py-5 text-white text-center" style={backgroundImageStyle}>
        <div className="container">
          <h2 className="fw-bold mb-4">Our House Packages</h2>
          <ul className="list-unstyled row justify-content-center">
            {services.map((item, index) => (
              <li
                key={index}
                className="col-6 col-md-4 mb-3 d-flex align-items-center justify-content-center"
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
                onClick={handleNavigate}
              >
                <span className="me-3" style={{ fontSize: "2rem" }}>
                  {item.icon}
                </span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePackage;
