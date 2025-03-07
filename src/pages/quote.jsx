import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_user_id";

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 bg-light">
      <Container className="py-5" style={{ maxWidth: "800px" }}>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3">
            Get a Free Quote
          </h2>
          <p className="lead text-muted">
            Complete this form and our design experts will contact you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <Alert variant="success" className="text-center shadow">
            <h4 className="alert-heading">Success!</h4>
            <p>Your request has been submitted. We'll contact you shortly.</p>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit} className="card border-0 shadow p-4">
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="rounded-pill"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="rounded-pill"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+254 700 000 000"
                    className="rounded-pill"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formProjectType">
                  <Form.Label>Project Type</Form.Label>
                  <Form.Select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="rounded-pill"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Office</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formDetails">
                  <Form.Label>Project Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Describe your project..."
                    className="rounded-3"
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="text-center mt-4">
                <Button variant="primary" type="submit" className="px-5 py-3 rounded-pill" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" className="me-2" /> : <FaPaperPlane className="me-2" />}
                  {loading ? "Sending..." : "Submit Request"}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Container>
    </section>
  );
};

export default Quote;
