import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiClipboard, FiLayout, FiHome } from 'react-icons/fi';


const ProcessComponent = () => {
  const steps = [
    {
      icon: <FiClipboard />,
      title: "Initial Consultation",
      description: "Free 90-minute session to understand your vision, space requirements, and budget"
    },
    {
      icon: <FiLayout />,
      title: "Concept Development",
      description: "3D renderings and material selection based on your preferences"
    },
    {
      icon: <FiHome />,
      title: "Design Refinement",
      description: "Material sampling and final design approvals with our expert team"
    },
    {
      icon: <FiHome />,
      title: "Implementation",
      description: "Project management with weekly updates and quality assurance"
    }
  ];

  return (
    <section className="process-section py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold gradient-text mb-3">
              Our Design Process
            </h2>
            <p className="lead text-muted">
              Transparent workflow ensuring perfection at every stage
            </p>
          </Col>
        </Row>

        <Row className="g-4 position-relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={index} className="process-step">
              <div className="step-card p-4 bg-soft-white rounded-4 shadow-sm">
                <div className="step-number" style={{ color: 'var(--heavy-orange)' }}>{index + 1}</div>
                <div className="step-icon mb-3">
                  {React.cloneElement(step.icon, { className: 'text-navy-blue', size: 40 })}
                </div>
                <h4 className="fw-bold mb-3" style={{ color: 'var(--navy-blue)' }}>{step.title}</h4>
                <p className="text-muted mb-0">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProcessComponent;
