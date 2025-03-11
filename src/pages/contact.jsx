import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Contact Info Component
const ContactInfo = () => (
  <Card className="bg-light p-4 mt-4 shadow-sm">
    <h4 className="mb-3 text-dark">
      <FaMapMarkerAlt aria-label="Location" /> Our Office
    </h4>
    <p className="text-muted">Nairobi, Kenya</p>
    
    <h4 className="mb-3 text-dark">
      <FaEnvelope aria-label="Email" /> Email
    </h4>
    <p className="text-muted">uniqueinteriors@gmail.com</p>
    
    <h4 className="mb-3 text-dark">
      <FaPhone aria-label="Phone" /> Phone
    </h4>
    <p className="text-muted">+254740045355</p>
  </Card>
);

// Main Contact Component
const Contact = () => {
  return (
    <Container className="contact-page py-5">
      <Card className="shadow-lg border-0">
        <Card.Header className="bg text-white text-center">
          <h2>Get in Touch</h2>
        </Card.Header>
        <Card.Body>
          <Row className="g-5 align-items-center me-3">
            <Col lg={6}>
              {/* Contact Form */}
              <Form className="contact-form p-3">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="text-dark" htmlFor="name">Name</Form.Label>
                  <Form.Control type="text" id="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="text-dark" htmlFor="email">Email</Form.Label>
                  <Form.Control type="email" id="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label className="text-dark" htmlFor="message">Message</Form.Label>
                  <Form.Control as="textarea" id="message" rows={4} required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3 btn2">
                  Send Message
                </Button>
              </Form>
            </Col>

            {/* Right Column: Contact Info */}
            <Col lg={6}>
              <ContactInfo />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;