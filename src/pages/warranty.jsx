import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Warranty = () => {
  return (
    <Container className="my-5 pt-5 ">
      <h1 className="text-center mb-4">Our Warranty & Maintenance</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="fw-bold   color ">2-Year Warranty</Card.Title>
              <Card.Text>
                We offer a comprehensive 2-year warranty on all our projects. This warranty covers any defects in materials and workmanship, ensuring peace of mind for our clients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="fw-bold">Free Maintenance</Card.Title>
              <Card.Text>
                Enjoy free maintenance services for the first year after project completion. Our team is dedicated to ensuring your satisfaction and the longevity of our work.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Warranty;