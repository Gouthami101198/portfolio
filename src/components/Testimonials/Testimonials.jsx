import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import testimonialData from "./testimonialData";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">

      {/* Header */}

      <div className="testimonials-top">

        <div className="testimonials-heading">

          <span className="testimonials-subtitle">
            Testimonials
          </span>

          <h2>
            What Our Client
            <br />
            Says
          </h2>

        </div>

        <button className="client-btn">
          Become a Client
        </button>

      </div>

      {/* Testimonial */}

      <div className="testimonial-wrapper">

        <TestimonialCard
          testimonial={testimonialData[0]}
        />

      </div>

    </section>
  );
};

export default Testimonials;