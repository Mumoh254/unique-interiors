import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


// Import images (replace with your actual image paths)
import residentialImage from '/images/kitchen.jpg';
import officeImage from '/images/kitchen.jpg';
import outdoorImage from '/images/kitchen.jpg';
import renovationImage from '/images/kitchen.jpg';
import constructionImage from '/images/kitchen.jpg';
import gypsumImage from '/images/kitchen.jpg';
import tilingImage from '/images/kitchen.jpg';
import cabrosImage from '/images/kitchen.jpg';

const ProjectTypes = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const projectData = [
    {
      title: 'Residential Projects',
      description: 'Transforming homes into personalized, functional, and beautiful spaces.',
      image: residentialImage,
    },
    {
      title: 'Office Projects',
      description: 'Designing workspaces that inspire productivity and creativity.',
      image: officeImage,
    },
    {
      title: 'Outdoor Projects',
      description: 'Creating stunning outdoor spaces for relaxation and entertainment.',
      image: outdoorImage,
    },
    {
      title: 'House Renovation',
      description: 'Revamping and modernizing existing homes for a fresh look.',
      image: renovationImage,
    },
    {
      title: 'Construction',
      description: 'Building robust and sustainable structures from the ground up.',
      image: constructionImage,
    },
    {
      title: 'Gypsum Works',
      description: 'Crafting elegant and durable gypsum ceilings and partitions.',
      image: gypsumImage,
    },
    {
      title: 'Floor Tiling',
      description: 'Installing beautiful and long-lasting floor tiles for any space.',
      image: tilingImage,
    },
    {
      title: 'Cabros Paving',
      description: 'Designing durable and aesthetically pleasing outdoor cabros paving.',
      image: cabrosImage,
    },
  ];

  return (
    <div className="project-types-section p-5 bg-light rounded-4 shadow-sm">
      <h2 className="fw-bold mb-4 text-center">What We Do</h2>
      <Row className="g-4 mb-4">
        {projectData.map((project, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
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
              <div className="gradient-overlay"></div>

              {/* Text Overlay */}
              <div className="text-overlay position-absolute bottom-0 start-0 w-100 p-4">
                <h5 className="text-white fw-bold mb-2">{project.title}</h5>
                <p className="text-white small mb-3">{project.description}</p>
                <Button
                  variant="outline-light"
                  size="sm"
                  className="align-self-start"
                  onClick={handleViewProjects}
                >
                  View More
                </Button>
              </div>
            </div>
          </Col>
        ))}
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