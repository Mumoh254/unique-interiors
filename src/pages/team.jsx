import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Nicholas Mwaniki",
    role: "CEO & Founder",
    img: "/images/main.jpg",
    socials: {
      facebook: "https://www.facebook.com/share/1AR5WRjHPb/",
      twitter: "#",
      linkedin: "#",
      youtube: "https://www.youtube.com/@nicholasmwaniki662",
      instagram: "#",
    },
  },
  {
    name: "Daniel King'la",
    role: "Chief Officer Design Fittings",
    img: "/images/team.webp",
    socials: {
      facebook: "https://www.facebook.com/share/1AR5WRjHPb/",
      twitter: "#",
      linkedin: "#",
      youtube: "https://www.youtube.com/@nicholasmwaniki662",
      instagram: "#",
    },
  },
  {
    name: "Design and Implementation Team",
    role: "Lead Team",
    img: "/images/tema2.webp",
    socials: {
      facebook: "https://www.facebook.com/share/1AR5WRjHPb/",
      twitter: "#",
      linkedin: "#",
      youtube: "https://www.youtube.com/@nicholasmwaniki662",
      instagram: "#",
    },
  },
];

const Team = () => {
  return (
    <section className="py-5 bg-light">
      <Container className="text-center mb-5">
        <h2 className="display-4 fw-bold color mb-3">Meet Our Team</h2>
        <p className="color fs-2 mb-5">
          A team of visionaries, innovators, and creators in Interior Space.
        </p>

        <Row className="g-4 justify-content-center flex-wrap">
          {teamMembers.map((member, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="d-flex">
              <motion.div whileHover={{ scale: 1.05 }} className="w-100" style={{ cursor: "pointer" }}>
                <Card className="h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={member.img}
                      alt={member.name}
                      className="w-100 mx-auto mt-4 border"
                      style={{ objectFit: "cover", width: "100%", height: "250px" }}
                      loading="lazy"
                    />
                  </div>
                  <Card.Body className="py-4">
                    <Card.Title className="fs-5 fw-bold mb-2">{member.name}</Card.Title>
                    <Card.Text className="text-muted small">{member.role}</Card.Text>
                    <div className="d-flex justify-content-center gap-3 mt-3">
                      <a href={member.socials.facebook} className="text-decoration-none text-primary">
                        <FaFacebook size={20} />
                      </a>
                      <a href={member.socials.twitter} className="text-decoration-none text-info">
                        <FaTwitter size={20} />
                      </a>
                      <a href={member.socials.linkedin} className="text-decoration-none text-primary">
                        <FaLinkedin size={20} />
                      </a>
                      <a href={member.socials.youtube} className="text-decoration-none text-danger">
                        <FaYoutube size={20} />
                      </a>
                      <a href={member.socials.instagram} className="text-decoration-none text-danger">
                        <FaInstagram size={20} />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="mt-5 p-5 bg text-white rounded-3">
          <h3 className="h2 fw-bold mb-4">Our Mission & Vision</h3>
          <div className="fs-5">
            <p className="mb-3">
              <strong>Mission:</strong> # We Are The Solution To Your Interior Space.
            </p>
            <br />
            <p className="mb-0">
              <strong>Vision:</strong> # Putting Dreams Into Action <br />
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;