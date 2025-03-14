import React, { Suspense } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoadingSpinner from "./looder";
import { FiCheck, FiAward, FiUsers, FiHome } from "react-icons/fi";

const About = () => (
  <Container className="py-5 about-section text-center">
    <Suspense fallback={<LoadingSpinner />}>
      <HeroSection />
      <AboutContent />
      <AchievementsSection />
    </Suspense>
  </Container>
);

const HeroSection = () => (
  <Row className="justify-content-center  mb-5">
    <Col xs={12}>
      <h1 className="display-4 fw-bold mb-3 text-dark">
        Crafting Spaces with Passion
      </h1>
      <button className="btn2 px-5 py-2" >Since 2015</button>
      <p className="lead ">
        Nairobi's Premier Interior Design Studio Transforming Visions into Reality
      </p>
    </Col>
  </Row>
);

const AboutContent = () => (
  <Row className="g-5 align-items-start mb-5">
    <Col lg={12}>
      <SectionHeading icon={<FiHome />} title="Redefining Interior Spaces in Nairobi" />
      <p className="lead text-muted">
        At Unique Interiors, we blend contemporary African aesthetics with global design trends 
        to create spaces that tell your unique story.
      </p>
      <ExpertiseGrid />
      <DesignPhilosophy />
    </Col>
  </Row>
);

const SectionHeading = ({ icon, title }) => (
  <h2 className="fw-bold mb-4  d-flex align-items-center justify-content-center">
    {icon} <span className="ms-2">{title}</span>
  </h2>
);

const ExpertiseGrid = () => (
  <Row className="g-4 mb-4">
    {["Residential Transformations", "Commercial Design Solutions"].map((item) => (
      <Col md={6} key={item}>
        <Card className="p-3 bg shadow-sm border-0  text-white text-center">
          <FiCheck className="bg fs-3 mb-2" />
          <h5>{item}</h5>
        </Card>
      </Col>
    ))}
  </Row>
);

const DesignPhilosophy = () => (
  <>
    <SectionHeading icon={<FiUsers />} title="Our Design Philosophy" />
    <Row>
      {designPhilosophyItems.map((card) => (
        <Col md={6} key={card.title}>
          <PhilosophyCard {...card} />
        </Col>
      ))}
    </Row>
  </>
);

const designPhilosophyItems = [
  { title: "Client-Centric Approach", content: "We listen to our clients to tailor unique spaces that fit their needs." },
  { title: "Sustainability & Innovation", content: "We incorporate eco-friendly materials and the latest design trends." },
];

const PhilosophyCard = ({ title, content }) => (
  <Card className="h-100 border-0 shadow-sm   p-3 bg text-center">
    <Card.Body>
      <h5 className="fw-bold  text-white mb-3">{title}</h5>
      <p className="text-white">{content}</p>
    </Card.Body>
  </Card>
);

const AchievementsList = () => (
  <Row className="g-4 text-center bg p-5">
    {[ 
      { icon: <FiAward className="text-warning fs-3" />, text: "Awarded Best Interior Designers 2023" },
      { icon: <FiUsers className="text-warning fs-3" />, text: "Over 500+ Happy Clients" },
    ].map((item, index) => (
      <Col md={6} key={index}>
        <Card className="p-3 shadow-sm border-0 bg-white text-dark">
          <div className="d-flex align-items-center justify-content-center">
            {item.icon}
            <span className="ms-3">{item.text}</span>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
);

const AchievementsSection = () => (
  <Row className="g-4 mt-5">
    <Col md={12}>
      <Card className="border-0 shadow-lg bg-light text-dark">
        <Card.Body className="py-5">
          <AchievementsList />
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default About;
