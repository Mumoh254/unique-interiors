import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiClipboard, FiLayout, FiHome, FiCheckCircle } from "react-icons/fi";

const ProcessComponent = () => {
  const steps = [
    {
      icon: <FiClipboard />,
      title: "Initial Consultation",
      description:
        "Free 90-minute session to understand your vision, space requirements, and budget.",
    },
    {
      icon: <FiLayout />,
      title: "Concept Development",
      description:
        "3D renderings and material selection tailored to your preferences.",
    },
    {
      icon: <FiHome />,
      title: "Design Refinement",
      description:
        "Material sampling and final design approvals with our expert team.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Implementation",
      description:
        "Seamless project management with weekly updates and quality assurance.",
    },
  ];

  return (
    <section className="process-section py-5 text-black">
      <Container>

        {/* Section Heading */}

        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold text-black">
              Our Design Process
            </h2>
            <p className="text-black">
              A transparent workflow ensuring excellence at every stage.
            </p>
          </Col>
        </Row>

        {/* Process Steps */}
        <Row className="g-4 position-relative process-wrapper">
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={index} className="process-step">
              <div className="step-card p-4 rounded-4 shadow-sm text-center bg  text-white transition-effect">
                <div className="step-number">{index + 1}</div>
                <div className="step-icon mb-3 ">
                  {React.cloneElement(step.icon, { size: 40 })}
                </div>
                <h4 className="fw-bold text-white">{step.title}</h4>
                <p className="text-white">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>{`
        .process-section {
          position: relative;
        }
        .process-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
        }
        .step-card {
          max-width: 320px;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
        }
        .step-number {
          font-size: 2rem;
          font-weight: bold;
        }
        
        /* Timeline Line */
        @media (min-width: 992px) {
          .process-wrapper::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 5%;
            height: 90%;
            width: 4px;
            background: var(--navy-blue);
            transform: translateX(-50%);
            border-radius: 5px;
          }
        }
        @media (max-width: 991px) {
          .process-wrapper::before {
            content: "";
            position: absolute;
            left: 10px; /* Moves the line to the left */
            top: 5%;
            height: 90%;
            width: 4px;
            background: var(--navy-blue);
            border-radius: 5px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessComponent;
