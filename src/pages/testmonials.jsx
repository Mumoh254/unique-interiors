import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    id: 1,
    name: ".. Welt  Tallis  ",
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
    <section className="py-5 bg-light">
      <div className="container text-start">
        <h2 className="mb-4 fw-bold">What Clients Say About Us</h2>
        <div className="row justify-content-center">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="position-relative p-4 bg-white rounded shadow-sm text-start">
                <p className="text-muted fw-bold ">"{testimonial.feedback}"</p>
                <p className="fw-bold text-dark mb-0">- {testimonial.name}</p>
                {/* Chat bubble tail */}
                <div className="bg position-absolute bottom-0 start-0 translate-middle  shadow-sm rounded-circle p-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
