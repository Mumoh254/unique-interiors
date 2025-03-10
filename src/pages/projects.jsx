import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, ButtonGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const projects = [
  { 
    id: 1,
    category: 'Residential',
    type: 'Renovation',
    title: 'Modern Apartment Makeover',
    image: '/images/kitchen.png',
    year: '2023',
    excerpt: 'Complete transformation of a 3-bedroom apartment',
    description: 'A contemporary kitchen renovation in the heart of Nairobi. Perfect for a modern lifestyle.'
  },
  { 
    id: 2,
    category: 'Residential',
    type: 'Renovation',
    title: 'Stylish Living Room Redesign',
    image: '/images/kitchen7.jpg',
    year: '2023',
    excerpt: 'Stylish redesign of a spacious living room with minimalistic aesthetics.',
    description: 'A living room that blends comfort and style with sustainable design and quality materials.'
  },
  { 
    id: 3,
    category: 'Residential',
    type: 'Renovation',
    title: 'Elegant Bedroom Transformation',
    image: '/images/kitchen6.jpg',
    year: '2024',
    excerpt: 'A serene bedroom renovation with a focus on tranquility and elegance.',
    description: 'The bedroom was transformed into a relaxing retreat with custom gypsum ceilings and feature lighting.'
  },
  { 
    id: 4,
    category: 'Residential',
    type: 'Renovation',
    title: 'Modern Bathroom Overhaul',
    image: '/images/kitchen5.jpg',
    year: '2024',
    excerpt: 'Comprehensive bathroom renovation with sleek finishes and modern amenities.',
    description: 'From the tiles to the gypsum ceiling, every detail was meticulously chosen to bring serenity.'
  },
  { 
    id: 5,
    category: 'Residential',
    type: 'Renovation',
    title: 'Luxury Kitchen Refurbishment',
    image: '/images/kitchen5.jpg',
    year: '2025',
    excerpt: 'High-end kitchen renovation with premium finishes.',
    description: 'State-of-the-art appliances and sustainable materials were used to create this dream kitchen.'
  },
  { 
    id: 6,
    category: 'Residential',
    type: 'Renovation',
    title: 'Mirror & Wardrobe Redesign',
    image: '/images/mirror.jpg',
    year: '2024',
    excerpt: 'A modern redesign of mirror installations and wardrobe solutions.',
    description: 'Custom-built wardrobes and elegant mirror features that create a sleek, modern feel.'
  },
  { 
    id: 7,
    category: 'Residential',
    type: 'Renovation',
    title: 'Chic Wardrobe & Storage Solutions',
    image: '/images/wardrobe.jpg',
    year: '2023',
    excerpt: 'Efficient use of space with stylish wardrobe and storage solutions.',
    description: 'Incorporating gypsum ceiling work and tailored storage options to maximize space.'
  },
  { 
    id: 8,
    category: 'Residential',
    type: 'Renovation',
    title: 'Luxury Kitchen Overhaul',
    image: '/images/kitchen4.jpg',
    year: '2023',
    excerpt: 'Transforming an outdated kitchen into a luxurious culinary space.',
    description: 'Incorporating top-of-the-line appliances, quartz countertops, and stylish pavements.'
  },
  { 
    id: 9,
    category: 'Commercial',
    type: 'Office',
    title: 'Corporate Office Design',
    image: '/images/kitchen3.jpg',
    year: '2023',
    excerpt: '2000 sq ft office space redesign.',
    description: 'A sleek and modern office space that promotes productivity and creativity.'
  },
  // More projects...
];

const categories = ['All', 'Residential', 'Commercial', 'Office', 'Renovation', 'Tiling', 'Gypsum', 'Pavements'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.category === selectedCategory || 
        project.type === selectedCategory
      );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Helmet>
        <title>Our Projects - Unique Interiors</title>
      </Helmet>

      <Container className="py-5">
        <h1 className="display-4 mb-5 text-center">Our Portfolio</h1>
        
        {/* Responsive Filter Navigation */}
        <div className="mb-4 text-center">
          <ButtonGroup className="flex-wrap">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'primary' : 'outline-primary'}
                onClick={() => setSelectedCategory(cat)}
                className="btn3 m-1 rounded-pill"
                style={{ flex: '1 1 auto', minWidth: '100px' }} // Ensure buttons are flexible
              >
                {cat}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        <Row>
          {filteredProjects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4} className="mb-4">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="h-100 shadow-lg rounded-3 overflow-hidden"
              >
                <Card className="h-100 border-0">
                  <div className="image-container">
                    <Card.Img 
                      variant="top" 
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <Badge bg="light" text="dark" className="mb-2">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.excerpt}</Card.Text>
                    <p>{project.description}</p>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {project.category} • {project.type}
                  </Card.Footer>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          height: 250px;
        }
        
        .project-image {
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: flex-end;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .image-container:hover .image-overlay {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .image-container {
            height: 200px;
          }
        }
      `}</style>
    </motion.div>
  );
}
