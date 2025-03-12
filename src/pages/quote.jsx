import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from "react-icons/fa";

const countiesInKenya = [
  "Mombasa", "Nairobi", "Kisumu", "Nakuru", "Kiambu", "Machakos", "Uasin Gishu", "Kakamega", "Nyeri", "Meru", "Embu", "Bungoma", "Kisii", "Turkana", "Narok", "Kajiado", "Kilifi", "Taita Taveta", "Laikipia", "Busia", "Homa Bay", "Migori", "Trans Nzoia", "Siaya", "Vihiga", "Kericho", "Bomet", "Nyandarua", "Tharaka Nithi", "West Pokot", "Samburu", "Marsabit", "Isiolo", "Tana River", "Garissa", "Wajir", "Mandera", "Lamu"
];

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
    package: "",
    location: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_rw432qd";
    const templateID = "template_trxcts8";
    const userID = "FGBV3zSBJEQcNqihu";

    try {
      await emailjs.send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone, 
        projectType: formData.projectType,
        service: formData.package, // Change `package` to `service`
        county: formData.location, // Change `location` to `county`
        length: formData.length,
        width: formData.width,
        height: formData.height,
        timeline: formData.timeline,
        details: formData.details
      }, userID);
      
      
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
          <p className="quote-subtext">Complete this form and our design experts will contact you within 24 hours.</p>
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
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="form-label">Email Address</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label className="form-label">Phone Number</Form.Label>
                  <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+254 700 000 000" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formProjectType">
                  <Form.Label className="form-label">Project Type</Form.Label>
                  <Form.Select name="projectType" value={formData.projectType} onChange={handleChange}>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Office</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPackage">
                  <Form.Label className="form-label">Package</Form.Label>
                  <Form.Select name="package" value={formData.package} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    <option>Plumbing</option>
                    <option>Tiling</option>
                    <option>Cabinets</option>
                    <option>Kitchen Makeover</option>
                    <option>Painting</option>
                    <option>Bathroom Fittings</option>
                    <option>General Maintenance</option>
                    <option>Interior Design</option>
                    <option>House Renovation</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLocation">
                  <Form.Label className="form-label">Location (County)</Form.Label>
                  <Form.Select name="location" value={formData.location} onChange={handleChange} required>
                    <option value="">Select County</option>
                    {countiesInKenya.map((county, index) => (
                      <option key={index} value={county}>{county}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} className="text-start mt-4">
                <Button variant="primary" type="submit" className="btn2" disabled={loading}>
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
