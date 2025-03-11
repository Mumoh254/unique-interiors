import React, { useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ Keep hooks at the top level

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <Navbar bg="light" expand="lg" fixed="top" expanded={isOpen} className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleLinkClick} className="brand-logo">
          <img src="/images/logo.webp" alt="Unique Interiors Logo" className="logo" />
          <span className="logo-text">Unique Interiors Solutions</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded={isOpen} onClick={handleToggle}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/process", label: "Process" },
              { path: "/contact", label: "Contact" },
              { path: "/team", label: "Our-Team" },
            ].map(({ path, label }) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                onClick={handleLinkClick}
                className={`nav-link-custom px-3 ${location.pathname === path ? "active" : ""}`}
              >
                {label}
              </Nav.Link>
            ))}
            <Nav.Link href="tel:+254710772575" onClick={handleLinkClick} className="nav-link-custom px-4 call-btn">
              Call
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default React.memo(Header);
