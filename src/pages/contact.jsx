import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Optional: ContactInfo Component for Modularity
const ContactInfo = () => (
  <div className="contact-info mt-5">
    <h4 className="mb-3">
      <FaMapMarkerAlt aria-label="Location" /> Our Office
    </h4>
    <p>Nairobi, Kenya</p>
    
    <h4 className="mb-3">
      <FaEnvelope aria-label="Email" /> Email
    </h4>
    <p>uniqueinteriors@gmail.com</p>
    
    <h4 className="mb-3">
      <FaPhone aria-label="Phone" /> Phone
    </h4>
    <p>+254740045355</p>
  </div>
);

// Main Contact Component
const Contact = () => {
  return (
    <Container className="contact-page py-5">
      <Row className="g-5 align-items-center">
        {/* Left Column: Contact Image */}
        <Col lg={6}>
          <div className="contact-image text-center">
            <img 
              src="/images/logo.png" 
              alt="Contact Us" 
              className="img-fluid rounded"
            />
          </div>
        </Col>
        
        {/* Right Column: Contact Form and Info */}
        <Col lg={6}>
          <h2 className="section-title mb-4">Get in Touch</h2>
          
          {/* Contact Form */}
          <Form className="contact-form">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control type="text" id="name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control as="textarea" id="message" rows={4} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Send Message
            </Button>
          </Form>

          {/* Contact Info Section */}
          <ContactInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;