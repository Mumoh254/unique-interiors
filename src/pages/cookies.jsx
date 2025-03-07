import React from "react";
import { Container, Alert, ListGroup, Card, Button } from "react-bootstrap"; // Added Button import
import { FaCookie } from "react-icons/fa"; // Use FaCookie instead

const CookiesPolicy = () => {
  return (
    <Container className="py-5">
      <Card className="shadow-lg border-0">
        <Card.Header className="bg-primary text-white">
          <h1 className="text-center mb-0">
            <FaCookie className="me-3" /> {/* Fixed Icon */}
            Cookies Policy
          </h1>
        </Card.Header>

        <Card.Body className="p-4">
          <Alert variant="info" className="d-flex align-items-center">
            <FaCookie className="me-3 fs-3" /> {/* Fixed Icon */}
            We use cookies to enhance your browsing experience
          </Alert>

          <section className="mb-5">
            <h2 className="mb-4">Cookie Types</h2>
            <ListGroup>
              <ListGroup.Item className="d-flex align-items-center">
                <span className="badge bg-primary me-3">1</span>
                Essential Cookies (Required for site functionality)
              </ListGroup.Item>
            </ListGroup>
          </section>

          <Card className="bg-light">
            <Card.Body>
              <h3>Managing Preferences</h3>
              <p>Control cookies through your browser settings:</p>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="outline-primary">Chrome</Button>
                <Button variant="outline-primary">Firefox</Button>
                <Button variant="outline-primary">Safari</Button>
              </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CookiesPolicy;
