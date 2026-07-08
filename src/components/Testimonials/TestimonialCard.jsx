import "./TestimonialCard.css";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-container">

      {/* Left Side */}

      <div className="testimonial-card">

        <FaQuoteLeft className="quote-icon" />

        <p className="testimonial-text">
          {testimonial.review}
        </p>

        <div className="testimonial-user">

          <h3>{testimonial.name}</h3>

          <span>{testimonial.designation}</span>

        </div>

        <div className="testimonial-navigation">

          <button className="arrow-btn">&#8249;</button>

          <span className="page-number">
            01
          </span>

          <button className="arrow-btn">&#8250;</button>

        </div>

      </div>

      {/* Right Side */}

      <div className="testimonial-image">

        <img
          src={testimonial.image}
          alt={testimonial.name}
        />

      </div>

    </div>
  );
};

export default TestimonialCard;