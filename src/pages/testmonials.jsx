import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    text: "Well done immersion team",
    author: "Tatiana Petrov",
  },
  {
    id: 2,
    text: "Bunch of excellent professionals, keeping note of each detail and taking care of that during execution is exceptional...",
    author: "Rob M",
  },
  {
    id: 3,
    text: "They delivered the office before time, I was able to start operation before the due date, indirectly helped in saving my rent",
    author: "James Thores",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section sc  py-4 ">
      <Container>
        <h2 className=" btn text-center mb-4  ">What Our Clients Say</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="triangle"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
