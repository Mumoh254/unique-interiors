import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProjectTypes = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const projectData = [
    {
      title: 'Residential Projects',
      description: 'Transforming homes into personalized, functional, and beautiful spaces.',
      image: '/images/residential.webp',
    },
    {
      title: 'Office Projects',
      description: 'Designing workspaces that inspire productivity and creativity.',
      image: '/images/ofiice.webp',
    },
    {
      title: 'House Renovation',
      description: 'Revamping and modernizing existing homes for a fresh look.',
      image: '/images/renovation.webp',
    },
    {
      title: 'House Construction',
      description: 'Building robust and sustainable structures from the ground up.',
      image: '/images/construction.avif',
    },
    {
      title: 'Gypsum Works',
      description: 'Crafting elegant and durable gypsum ceilings and partitions.',
      image: '/images/gypsum.avif',
    },
    {
      title: 'Floor  & Wall Tiling',
      description: 'Installing beautiful and long-lasting floor tiles for any space.',
      image: '/images/tiling1.avif',
    },
  ];

  return (
    <div className="project-types-section p-5 bg-light rounded-4 shadow-sm">
      <h2 className="fw-bold mb-4 text-center">What We Do</h2>

      <Row className="g-4 mb-4">
        {projectData.map((project, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <div
              className="project-card position-relative rounded-3 overflow-hidden shadow-sm"
              style={{
                height: '300px',
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient Overlay */}
              <div
                className="gradient-overlay position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))',
                }}
              ></div>

              {/* Overlay Text */}
              <div className="text-overlay position-absolute bottom-0 start-0 w-100 p-4">
                <h5 className="text-white fw-bold mb-2">{project.title}</h5>
                <p className="text-white small mb-3">{project.description}</p>
                <Button size="sm" className="btn2" onClick={handleViewProjects}>
                  View More
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Flexbox Container for Arrow and Button */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="arrow-container">
          <div className="text-muted small mb-2">Explore Our Projects</div>
          <div className="thin-arrow"></div>
        </div>

        {/* View Projects Button */}
        <Button className="btn2" onClick={handleViewProjects}>
          View Our Recent Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectTypes;
