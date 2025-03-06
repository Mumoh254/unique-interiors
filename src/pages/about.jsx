// AboutUs.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => (
  <Container className="py-5">
    <h1 className="text-center mb-5">About Unique Interiors</h1>
    <Row>
      <Col md={6}>
        <img 
          src="/about-us.jpg" 
          alt="Our design team working" 
          className="img-fluid rounded"
        />
      </Col>
      <Col md={6} className="mt-4 mt-md-0">
        <h2>Transforming Spaces Since 2020</h2>
        <p>
          As leading interior designers in Nairobi, Unique Interiors specializes in creating 
          functional and aesthetically pleasing spaces. Our team of certified designers combines 
          innovative solutions with timeless elegance to transform both residential and 
          commercial properties.
        </p>
        <h3>Our Core Values</h3>
        <ul>
          <li>Client-Centric Approach</li>
          <li>Sustainable Design Practices</li>
          <li>Innovative Space Optimization</li>
          <li>Transparent Process</li>
        </ul>
      </Col>
    </Row>
  </Container>
);