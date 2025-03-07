// Contact.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {
  return (
    <Container className="contact-page">
      <Row className="g-5 align-items-center">
        <Col lg={6}>
          <div className="contact-image">
            <img 
              src="/images/logo.png" 
              alt="Contact Us" 
              className="img-fluid rounded"
            />
          </div>
        </Col>
        
        <Col lg={6}>
          <h2 className="section-title">Get in Touch</h2>
          <Form className="contact-form">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>

          <div className="contact-info mt-5">
            <h4><FaMapMarkerAlt /> Our Office</h4>
            <p> Nairobi  ,  Kenya </p>
            
            <h4><FaEnvelope /> Email</h4>
            <p>uniqueinteriors@gmail.com</p>
            
            <h4><FaPhone /> Phone</h4>
            <p>+254740045355</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;