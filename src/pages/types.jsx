import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FiHome, FiBriefcase, FiSun } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ProjectTypes = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="project-types-section p-5 bg-light rounded-4 shadow-sm">
      <h2 className="fw-bold mb-4 text-center">What We Do</h2>
      <Row className="g-4 mb-4">
        {/* Residential Projects */}
        <Col md={4}>
          <div className="p-4 bg-white rounded-3 shadow-sm">
            <FiHome className="text-primary fs-1 mb-3" />
            <h5 className="fw-bold mb-2">Residential Projects</h5>
            <p className="text-muted">
              Transforming homes into personalized, functional, and beautiful spaces.
            </p>
          </div>
        </Col>

        {/* Office Projects */}
        <Col md={4}>
          <div className="p-4 bg-white rounded-3 shadow-sm">
            <FiBriefcase className="text-primary fs-1 mb-3" />
            <h5 className="fw-bold mb-2">Office Projects</h5>
            <p className="text-muted">
              Designing workspaces that inspire productivity and creativity.
            </p>
          </div>
        </Col>

        {/* Outdoor Projects */}
        <Col md={4}>
          <div className="p-4 bg-white rounded-3 shadow-sm">
            <FiSun className="text-primary fs-1 mb-3" />
            <h5 className="fw-bold mb-2">Outdoor Projects</h5>
            <p className="text-muted">
              Creating stunning outdoor spaces for relaxation and entertainment.
            </p>
          </div>
        </Col>
      </Row>

      {/* Flexbox Container for Arrow and Button */}
      <div className="d-flex align-items-center justify-content-between">
        {/* Animated Arrow and Text */}
        <div className="arrow-container">
          <div className="text-muted small mb-2">Explore Our Projects</div>
          <div className="thin-arrow"></div>
        </div>

        {/* View Projects Button */}
        <Button 
          variant="primary" 
          size="lg" 
          className="px-5 py-3 rounded-pill fw-bold shadow-sm"
          onClick={handleViewProjects}
        >
          View Our Recent Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectTypes;