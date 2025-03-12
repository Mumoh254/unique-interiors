import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const careersData = [
  {
    title: 'Interior Designer',
    description: 'Join our team to create stunning interior spaces that inspire and delight.',
    requirements: 'Experience in interior design, strong portfolio, and creativity.',
    location: 'Nairobi, Kenya',
  },
  {
    title: 'Construction Fundi',
    description: 'Skilled fundis needed for various construction projects across Kenya.',
    requirements: 'Proven experience in construction, ability to work in a team.',
    location: 'Various Locations, Kenya',
  },
  {
    title: 'Plumber',
    description: 'Experienced plumbers needed for residential and commercial projects.',
    requirements: 'Certification in plumbing, strong problem-solving skills.',
    location: 'Nairobi, Kenya',
  },
];

const Careers = () => {
  const handleApplyNow = (title) => {
    const email = 'peteritumo2030@gmail.com';
    const subject = `Application for ${title}`;
    const body = `I am interested in the ${title} position.`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Container className=" pt-5 mt-5 ">
      <h1 className="text-center mb-4">Join Our Team</h1>
      <Row>
        {careersData.map((job, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>
                  <strong>Description:</strong> {job.description}
                </Card.Text>
                <Card.Text>
                  <strong>Requirements:</strong> {job.requirements}
                </Card.Text>
                <Card.Text>
                  <strong>Location:</strong> {job.location}
                </Card.Text>
                <Button className='btn2' onClick={() => handleApplyNow(job.title)}>
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Careers;