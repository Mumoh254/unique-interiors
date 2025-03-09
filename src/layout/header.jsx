import React, { useState, useCallback } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use useCallback to memoize the handleLinkClick function, preventing re-creation on every render
  const handleLinkClick = useCallback(() => {
    setIsOpen(false); // Close the navbar when a link is clicked
  }, []);

  // Toggle the navbar state
  const handleToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <Navbar bg="light" expand="lg" fixed="top" expanded={isOpen}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleLinkClick}>
          <img
            src="/images/logo.webp"
            alt="Unique Interiors Logo"
            className="logo"
          />
          Unique Interiors
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-expanded={isOpen}
          onClick={handleToggle} // Use the optimized toggle function
        >
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleLinkClick}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/process" onClick={handleLinkClick}>
              Process
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
              Contacts
            </Nav.Link>
            <Nav.Link href="tel:+254710772575" onClick={handleLinkClick}>
              Call
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default React.memo(Header); // Memoize the component to avoid unnecessary re-renders
