// GalleryComponent.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FiZoomIn } from 'react-icons/fi';
import './GalleryComponent.css';

const GalleryComponent = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    { id: 1, category: 'Residential', img: '/gallery1.jpg' },
    { id: 2, category: 'Commercial', img: '/gallery2.jpg' },
    { id: 3, category: 'Office', img: '/gallery3.jpg' },
    { id: 4, category: 'Residential', img: '/gallery4.jpg' },
    { id: 5, category: 'Commercial', img: '/gallery5.jpg' },
    { id: 6, category: 'Hospitality', img: '/gallery6.jpg' }
  ];

  const openLightbox = (img) => {
    setSelectedImg(img);
    setShowModal(true);
  };

  return (
    <section className="gallery-section py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Our Portfolio
            </h2>
            <p className="lead text-muted">
              Transforming visions into lived experiences
            </p>
          </Col>
        </Row>

        <Row className="gallery-grid g-3">
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id} className="gallery-item">
              <div 
                className="gallery-card position-relative rounded-4 overflow-hidden"
                onClick={() => openLightbox(project.img)}
              >
                <img 
                  src={project.img} 
                  alt={project.category} 
                  className="img-fluid hover-zoom"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <FiZoomIn className="zoom-icon" />
                  <div className="project-category">{project.category}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)}
          centered
          size="lg"
        >
          <Modal.Body className="p-0">
            {selectedImg && (
              <img 
                src={selectedImg} 
                alt="Enlarged view" 
                className="img-fluid rounded-3"
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default GalleryComponent;