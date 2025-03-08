import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    id: 1,
    name: ".. Welt Tallis",
    feedback: "Great service! My experience was smooth and professional.",
  },
  {
    id: 2,
    name: ".. Jayden",
    feedback: "Highly recommend! Quick response and excellent customer care.",
  },
  {
    id: 3,
    name: ".. Peter",
    feedback: "Best experience ever! Reliable and efficient service.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container text-start">
        <h2 className="testimonials-heading">What Clients Say About Us</h2>
        <div className="row justify-content-center">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="testimonial-card position-relative">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
                {/* Chat bubble tail */}
                <div className="chat-tail"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;