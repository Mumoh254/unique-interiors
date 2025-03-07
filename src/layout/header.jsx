import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar bg="light" expand="lg" fixed="top" expanded={isOpen}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/logo.png"
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
            <Nav.Link as={Link} to="/about" onClick={() => setIsOpen(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setIsOpen(false)}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/process" onClick={() => setIsOpen(false)}>Process</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setIsOpen(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
