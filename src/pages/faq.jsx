import React, { useState } from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does your interior design company offer?",
      answer: "We offer space planning, custom furniture design, home and office renovation, color consulting, lighting solutions, and full interior design projects."
    },
    {
      question: "Do you provide free consultations?",
      answer: "Yes, we offer a free initial consultation to understand your requirements. However, a site visit may have a small fee depending on your location."
    },
    {
      question: "How long does an interior design project take?",
      answer: "Project timelines vary based on complexity. On average, a small project takes 2-4 weeks, while full renovations may take 6-12 weeks."
    },
    {
      question: "What is your payment process?",
      answer: "We require a 50% upfront payment before starting, 30% during material procurement, and the remaining 20% upon project completion."
    },
    {
      question: "Can I choose my own materials and furniture?",
      answer: "Yes, you can select your own materials and furniture. We also provide expert recommendations based on your style and budget."
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer: "Yes, we specialize in both residential and commercial interior design, tailoring each project to fit specific client needs."
    },
    {
      question: "What happens if I want to make changes during the project?",
      answer: "Minor changes can be accommodated, but major modifications may affect cost and timeline. We will always discuss and confirm changes before proceeding."
    }
  ];

  return (
    <section className="py-5 bg-white">
      <Container className="py-5">
        <h2 className="text-start mb-5 display-5 fw-bold ">
          Frequently Asked Questions
        </h2>
        <Accordion activeKey={activeKey} style={{ maxWidth: '800px' }}>
          {faqs.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              eventKey={index.toString()}
              className="mb-3 border-0 rounded-3 shadow-sm"
            >
              <Accordion.Header 
                onClick={() => setActiveKey(activeKey === index.toString() ? null : index.toString())}
                className="p-3 "
              >
                <div className="d-flex justify-content-between w-100 pe-3">
                  <h5 className="mb-0 fw-bold text-dark">{faq.question}</h5>
                  {activeKey === index.toString() ? 
                    <FiChevronUp className="text-primary" /> : 
                    <FiChevronDown className="text-primary" />
                  }
                </div>
              </Accordion.Header>
              <Accordion.Body className="p-4 bg-white">
                <p className="lead text-muted mb-0">{faq.answer}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;