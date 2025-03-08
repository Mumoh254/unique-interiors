import React from "react";
import { Container, Card, ListGroup, Badge } from "react-bootstrap";
import { GiContract, GiMoneyStack, GiMaterialsScience } from "react-icons/gi";

const TermsOfService = () => {
  const sections = [
    {
      title: "Initial Consultation & Site Visit",
      icon: <GiContract />,
      items: [
        "Site visit required for space assessment",
        "Free consultation for projects over 1M KES",
        "Accurate measurements required"
      ]
    },
    {
      title: "Payment Terms",
      icon: <GiMoneyStack />,
      items: [
        "50% initial deposit required",
        "Balance due upon completion",
        "3% late fee per month"
      ]
    },
    // Add other sections...
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 display-4 fw-bold">Terms of Service</h2>
      
      {sections.map((section, index) => (
        <Card key={index} className="mb-4 shadow-lg border-0 rounded-3">
          <Card.Header className="d-flex align-items-center bg-primary text-white">
            <div className="me-3">{section.icon}</div>
            <h3 className="mb-0">{section.title}</h3>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              {section.items.map((item, idx) => (
                <ListGroup.Item key={idx} className="d-flex align-items-center py-3">
                  <Badge bg="primary" className="me-3">{idx + 1}</Badge>
                  {item}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}

      <Card className="mt-5 border-warning">
        <Card.Body className="text-center">
          <Card.Text className="fw-bold fs-5">
            By proceeding with our services, you agree to these terms
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TermsOfService;