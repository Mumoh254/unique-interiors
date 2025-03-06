import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      setProjects(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    };
    fetchProjects();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Helmet>
        <title>Our Projects - Unique Interios H</title>
        <meta name="description" content="Explore our award-winning interior design projects" />
      </Helmet>

      <Container className="py-5">
        <h1 className="display-4 mb-5">Our Portfolio</h1>
        
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={project.id} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card h-100 shadow"
              >
                <img
                  src={project.mainImage}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <div className="mb-2">
                    <Badge bg="primary" className="me-2">
                      {project.category}
                    </Badge>
                    <Badge bg="success">
                      {project.year}
                    </Badge>
                  </div>
                  <p>{project.excerpt}</p>
                  <Button 
                    variant="outline-primary"
                    href={`/projects/${project.id}`}
                  >
                    View Case Study
                  </Button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    {project.testimonials.length} Client Reviews
                  </small>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
}