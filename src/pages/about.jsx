import React from 'react';
import { Container, Row, Col, Badge, Card, ListGroup } from 'react-bootstrap';
import { FiCheck, FiAward, FiUsers, FiHome } from 'react-icons/fi';

const About = () => (
  <Container className="py-5 about-section">
    {/* Hero Section */}
    <Row className="justify-content-center mb-5">
      <Col xs={12} className="text-center">
        <h1 className="display-4 fw-bold mb-3 gradient-text">
          Crafting Spaces with Passion
          <Badge bg="dark" className="ms-3 fs-5">Since 2020</Badge>
        </h1>
        <p className="lead text-muted">
          Nairobi's Premier Interior Design Studio Transforming Visions into Reality
        </p>
      </Col>
    </Row>

    {/* About Content Section */}
    <Row className="g-5 align-items-center mb-5">
      {/* Image Section */}
      <Col lg={6} className="position-relative">
        <div className="image-container">
          <img 
            src="/images/logo.png" 
            alt="Our design team working" 
            className="img-fluid rounded-4 shadow-lg hover-transform"
          />
          <div className="experience-badge bg-primary text-white p-3 rounded-pill shadow-sm">
            <FiAward className="me-2" />
            150+ Successful Projects
          </div>
        </div>
      </Col>
      
      {/* Text Section */}
      <Col lg={6}>
        <div className="ps-lg-4">
          <h2 className="fw-bold mb-4">
            <FiHome className="me-2 text-primary" />
            Redefining Interior Spaces in Nairobi
          </h2>
          <p className="lead text-muted mb-4">
            At Unique Interiors, we blend contemporary African aesthetics with global design trends 
            to create spaces that tell your unique story. Our certified team brings expertise in:
          </p>
          
          {/* Expertise Grid */}
          <Row className="g-4 mb-4">
            <Col md={6}>
              <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm">
                <FiCheck className="text-success me-3 fs-4" />
                <span>Residential Transformations</span>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center p-3 bg-light rounded-3 shadow-sm">
                <FiCheck className="text-success me-3 fs-4" />
                <span>Commercial Design Solutions</span>
              </div>
            </Col>
          </Row>

          {/* Design Philosophy Section */}
          <h3 className="fw-bold mt-5 mb-4">
            <FiUsers className="me-2 text-primary" />
            Our Design Philosophy
          </h3>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold mb-3">Client-Centric Approach</h5>
                  <p className="text-muted">
                    We prioritize your vision through personalized consultations and 3D visualizations 
                    before any project begins.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h5 className="fw-bold mb-3">Sustainable Practices</h5>
                  <p className="text-muted">
                    Eco-friendly materials and energy-efficient solutions certified by KEBS and 
                    Green Building Council.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>

    {/* Achievements Section */}
    <Row className="g-4 mt-5">
      <Col md={12}>
        <Card className="border-0 bg-dark text-white overflow-hidden">
          <Card.Body className="p-5">
            <Row className="g-4 align-items-center">
              <Col md={8}>
                <h2 className="fw-bold mb-3">Our Achievements</h2>
                <ListGroup variant="flush" className="achievement-list">
                  <ListGroup.Item className="bg-transparent text-white d-flex align-items-center">
                    <FiAward className="me-3 fs-4 text-primary" />
                    2023 Kenya Interior Design Excellence Award
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-white d-flex align-items-center">
                    <FiUsers className="me-3 fs-4 text-primary" />
                    500+ Satisfied Clients Across East Africa
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-white d-flex align-items-center">
                    <FiCheck className="me-3 fs-4 text-primary" />
                    98% Client Satisfaction Rate
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={4} className="text-center">
                <div className="achievement-badge bg-primary p-4 rounded-circle shadow-lg">
                  <div className="display-3 fw-bold">4.9</div>
                  <div>Star Rating</div>
                  <div className="text-muted mt-2">Across Platforms</div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About;