import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card, Button, Badge, ButtonGroup, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SpinnerLoader from "./looder"; 


const projects = [
  {
    id: 1,
    category: 'Home',
    type: 'Kitchen',
    title: 'Modern Kitchen ',
    image: '/images/kitchen.jpg',
    year: '2023',
    excerpt: 'Complete transformation of a  Home  kitchen in Nakuru',
    description: 'A stylish modern kitchen featuring sleek white cabinetry, stainless steel appliances, and an integrated smoke extraction system, perfect for contemporary living in Nairobi.'
  },
  
  {
    id: 2,
    category: 'Home',
    type: 'Renovation',
    title: 'Stylish Brown Kitchen with Fridge and Cooker',
    image: '/images/kitchen6.webp',
    year: '2023',
    excerpt: 'Elegant redesign of a spacious kitchen with modern amenities.',
    description: 'A chic brown kitchen featuring a sleek fridge and cooker, combining functionality with contemporary style for a warm and inviting space.'
  },
  {
    id: 3,
    category: 'Home',
    type: 'Master Bedroom',
    title: 'Elegant Bedroom Transformation',
    image: '/images/masterbedrooom.webp',
    year: '2024',
    excerpt: 'A serene bedroom renovation with a focus on tranquility and elegance.',
    description: 'This master bedroom features a luxurious bathtub and a stylish side cabinet, creating a relaxing retreat with custom gypsum ceilings and ambient lighting.'
  },
  {
    id: 4,
    category: 'Home',
    type: 'Kitchen Making',
    title: 'Elegant White Kitchen with Tiling',
    image: '/images/kitchen5.webp',
    year: '2024',
    excerpt: 'Stunning kitchen renovation featuring sleek white finishes and modern tiling.',
    description: 'This modern kitchen features bright white cabinetry and stylish tiling, creating a fresh and inviting atmosphere perfect for culinary creativity.'
  },

  {
    id: 5,
    category: 'Office',
    type: 'Renovation',
    title: 'Elegant Office Partition with Wooden Flooring',
    image: '/images/office  partition.webp',
    year: '2025',
    excerpt: 'Stylish office partition featuring premium wooden flooring and modern design.',
    description: 'This office renovation showcases a sleek partition design complemented by rich wooden flooring, creating a professional and inviting workspace.'
  },
  {
    id: 6,
    category: 'Residential',
    type: 'Renovation',
    title: 'Elegant Window Frame with One-Way Mirror',
    image: '/images/mirror2.webp',
    year: '2024',
    excerpt: 'Stylish window frame design featuring a custom wooden build and one-way mirror.',
    description: 'This renovation showcases a beautifully crafted wooden window frame with a fixed one-way mirror, enhancing privacy while allowing natural light to fill the space.'
  },
  {
    id: 7,
    category: 'Residential',
    type: 'Renovation',
    title: 'Stylish Outdoor Cabros Fitting',
    image: '/images/cabros.webp',
    year: '2023',
    excerpt: 'Elegant outdoor cabros installation enhancing functionality and aesthetics.',
    description: 'This renovation features a beautifully laid cabros design, providing a durable and attractive outdoor surface that complements the surrounding landscape.'
  },
  {
    id: 8,
    category: 'comercial',
    type: 'Renovation',
    title: 'Charming Outdoor Cafe Space',
    image: '/images/outdoor.jpg',
    year: '2023',
    excerpt: 'Revitalizing an outdoor cafe area for a welcoming dining experience.',
    description: 'This renovation features stylish seating, vibrant landscaping, and elegant pavements, creating an inviting atmosphere for patrons to enjoy their meals al fresco.'
  },
  {
    id: 9,
    category: 'Tiling',
    type: 'Tiling',
    title: 'Elegant Bathroom Tiling',
    image: '/images/tiles.webp',
    year: '2023',
    excerpt: 'Stylish floor and wall tiling for a modern bathroom renovation.',
    description: 'This project features high-quality tiles on both the floor and walls, creating a sleek and contemporary look that enhances the overall aesthetic of the bathroom.'
  },
  {
    id: 10,
    category: 'Home',
    type: 'Renovation',
    title: 'Sleek Wall-Mounted Kitchen Hood',
    image: '/images/kitchenhood.webp',
    year: '2023',
    excerpt: 'Modern wall-mounted kitchen hood for enhanced cooking efficiency.',
    description: 'This stylish wall-mounted kitchen hood combines functionality and design, effectively removing smoke and odors while adding a contemporary touch to the kitchen decor.'
  },
  {
    id: 11,
    category: 'Home',
    type: 'Renovation',
    title: 'Sleek Kitchen Oven',
    image: '/images/oven.webp',
    year: '2023',
    excerpt: 'Modern wall-mounted kitchen hood for enhanced cooking efficiency.',
    description: 'This stylish wall-mounted kitchen hood combines functionality and design, effectively removing smoke and odors while adding a contemporary touch to the kitchen decor.'
  },
  {
    id: 12,
    category: 'Gypsum',
    type: 'Renovation',
    title: 'Elegant Gypsum Ceiling Installation',
    image: '/images/gypsum.avif',
    year: '2023',
    excerpt: 'Stylish gypsum ceiling design for a modern living space.',
    description: 'This renovation features a beautifully crafted gypsum ceiling that enhances the aesthetic appeal of the room while providing a sleek and contemporary finish.'
  }
,
{
  id: 13,
  category: 'Cabinets',
  type: 'Renovation',
  title: 'Stylish Cabinets and Wardrobe Solutions',
  image: '/images/cabinetts.jpg',
  year: '2023',
  excerpt: 'Modern cabinets and wardrobes designed for optimal storage and style.',
  description: 'This features custom-built cabinets and wardrobes that maximize storage space while adding a touch of elegance to the room. The sleek design and high-quality materials create a functional yet stylish solution for organizing clothes and accessories.'
},
{
  id: 15,
  category: 'Tiling',
  type: 'Renovation',
  title: 'Elegant Tiled Staircase with Ambient Lighting',
  image: '/images/saircase.jpg',
  year: '2023',
  excerpt: 'Stylish staircase renovation featuring beautiful tiling and modern lighting.',
  description: 'This renovation showcases a stunning tiled staircase complemented by ambient lighting, creating a warm and inviting atmosphere. The combination of high-quality tiles and strategically placed lights enhances both safety and aesthetic appeal, making the staircase a focal point of the home.'
},
{
  id: 9,
  category: 'Office',
  type: 'Renovation',
  title: 'Elegant Office Reception Area',
  image: '/images/whiteoffice.jpg',
  year: '2023',
  excerpt: 'Modern reception design featuring stylish cabinets and organizational solutions.',
  description: 'This renovation showcases custom-built cabinets and reception furniture that maximize storage while enhancing the professional aesthetic of the office. The sleek design and high-quality materials create a welcoming and functional space for clients and visitors, ensuring an impressive first impression.'
}

];

const categories = ['All', 'Home', 'Commercial', 'Office', 'Renovation', 'Tiling', 'Gypsum', 'Cabinets'];
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    setLoading(true);
    const result =
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory || project.type === selectedCategory);
    setTimeout(() => setLoading(false), 500); // Simulate a short delay
    return result;
  }, [selectedCategory]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Helmet>
        <title>Our Projects - Unique Interiors</title>
      </Helmet>

      <Container className="py-5">
        <h1 className="display-4 mb-5 text-center">Our Portfolio</h1>

        {/* Filter Buttons */}
        <div className="mb-4 text-center">
          <ButtonGroup className="flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "primary" : "outline-primary"}
                onClick={() => setSelectedCategory(cat)}
                className="btn3 m-1 rounded-pill"
                style={{ flex: "1 1 auto", minWidth: "100px" }}
              >
                {cat}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        {loading ? (
          <div className="text-center my-5">
            <SpinnerLoader />
          </div>
        ) : (
          <Row>
            {filteredProjects.map((project) => (
              <Col key={project.id} xs={12} md={6} lg={4} className="mb-4">
                <motion.div whileHover={{ scale: 1.03 }} className="h-100 shadow-lg rounded-3 overflow-hidden">
                  <Card className="h-100 border-0">
                    <div className="image-container">
                      <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" />
                      <div className="image-overlay">
                        <Badge bg="light" text="dark" className="mb-2">
                          {project.year}
                        </Badge>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title style={{ color: 'var(--navy-blue)' , fontWeight: "600"}} >{project.title}</Card.Title>
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
        )}
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
          background: rgba(0, 0, 0, 0.3);
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