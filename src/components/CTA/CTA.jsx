import "./CTA.css";
import { FaStarOfLife } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="cta">

      {/* Background Circles */}
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      {/* Decorative Stars */}
      <FaStarOfLife className="star left-star" />
      <FaStarOfLife className="star right-star" />

      {/* Content */}
      <div className="cta-content">
        <h2>Let's Get In Touch</h2>

        <button className="cta-btn">
          Become a Client
        </button>
      </div>

    </section>
  );
};

export default CTA;