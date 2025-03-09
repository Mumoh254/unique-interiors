import React, { useState, useEffect, Suspense } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './types.css'; // Ensure this path is correct

// Lazy load image
const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject('Image failed to load');
  });
};

const ProjectTypes = () => {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
      image: '/images/ofiice.png',
    },
    {
      title: 'House Renovation',
      description: 'Revamping and modernizing existing homes for a fresh look.',
      image: '/images/renovation.webp',
    },
    {
      title: 'Construction',
      description: 'Building robust and sustainable structures from the ground up.',
      image: '/images/construction.webp',
    },
    {
      title: 'Gypsum Works',
      description: 'Crafting elegant and durable gypsum ceilings and partitions.',
      image: '/images/kitchen.jpg',
    },
    {
      title: 'Floor Tiling',
      description: 'Installing beautiful and long-lasting floor tiles for any space.',
      image: '/images/tiling.webp',
    },
    {
      title: 'Cabros Paving',
      description: 'Designing durable and aesthetically pleasing outdoor cabros paving.',
      image: '/images/kitchen.jpg',
    },
  ];

  useEffect(() => {
    const loadAllImages = async () => {
      try {
        // Use Promise.all to load all images in parallel
        await Promise.all(projectData.map((project) => loadImage(project.image)));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
        setImagesLoaded(false);
      }
    };

    loadAllImages();
  }, []);

  return (
    <div className="project-types-section p-5 bg-light rounded-4 shadow-sm">
      <h2 className="fw-bold mb-4 text-center">What We Do</h2>

      <Suspense fallback={<div>Loading Projects...</div>}>
        <Row className="g-4 mb-4">
          {imagesLoaded ? (
            projectData.map((project, index) => (
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
                    <Button
                      size="sm"
                      className="align-self-start bg"
                      onClick={handleViewProjects}
                    >
                      View More
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <div className="text-center">
              <p>Loading Projects...</p>
            </div>
          )}
        </Row>
      </Suspense>

      {/* Flexbox Container for Arrow and Button */}
      <div className="d-flex align-items-center justify-content-between">
        {/* Animated Arrow and Text */}
        <div className="arrow-container">
          <div className="text-muted small mb-2">Explore Our Projects</div>
          <div className="thin-arrow"></div>
        </div>

        {/* View Projects Button */}
        <Button
          size="lg"
          className="custom-btn"
          onClick={handleViewProjects}
        >
          View Our Recent Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectTypes;
