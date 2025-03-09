import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

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
          onClick={() => setIsOpen(!isOpen)}
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
            <Nav.Link href="tel:+254710772575" onClick={handleLinkClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;