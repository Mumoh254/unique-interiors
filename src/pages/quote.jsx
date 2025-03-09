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
    length: "",
    width: "",
    height: "",
    timeline: "",
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
    <section className="quote-section">
      <Container className="py-5" style={{ maxWidth: "800px" }}>
        <div className="text-start mb-5">
          <h2 className="quote-heading">Get a Free Quote</h2>
          <p className="quote-subtext">
            Complete this form and our design experts will contact you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <Alert variant="success" className="text-center shadow">
            <h4 className="alert-heading">Success!</h4>
            <p>Your request has been submitted. We'll contact you shortly.</p>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit} className="quote-form">
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label className="form-label">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="form-label">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label className="form-label">Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+254 700 000 000"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formProjectType">
                  <Form.Label className="form-label">Project Type</Form.Label>
                  <Form.Select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Office</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formLength">
                  <Form.Label className="form-label">Length (m)</Form.Label>
                  <Form.Control
                    type="number"
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 10"
                    min="0"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formWidth">
                  <Form.Label className="form-label">Width (m)</Form.Label>
                  <Form.Control
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 8"
                    min="0"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formHeight">
                  <Form.Label className="form-label">Height (m)</Form.Label>
                  <Form.Control
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 3"
                    min="0"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formTimeline">
                  <Form.Label className="form-label">Timeline</Form.Label>
                  <Form.Control
                    type="date"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formDetails">
                  <Form.Label className="form-label">Project Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Describe your project..."
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="text-start mt-4">
                <Button variant="primary" type="submit" className="submit-button" disabled={loading}>
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
