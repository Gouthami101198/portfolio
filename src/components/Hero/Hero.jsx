import "./Hero.css";
import { FaHeart } from "react-icons/fa";

import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Left Content */}

      <div className="hero-left">

        <span className="portfolio">
          Portfolio
        </span>

        <h1 className="hero-title">
          Loujain
          <br />
          Muhammed
        </h1>

        <p className="hero-text">
          Welcome to <strong>"Designing where innovation knows no
          bounds."</strong> With a passion for pushing the
          boundaries of UI/UX design.
        </p>

        <div className="designation-box">
          <h2>UI-UX Designer</h2>
        </div>

        <button className="hero-btn">
          Become a Client
        </button>

      </div>

      {/* Center Badge */}

      <div className="hero-middle">

        <div className="circle-wrapper">

          <div className="circle-text">
             consLoremripsum dolor sit amet,
          </div>

          <div className="circle-icon">
            <FaHeart />
          </div>

        </div>

      </div>

      {/* Right Image */}

      <div className="hero-right">

        <div className="image-box">

          <img
            src={profile}
            alt="Profile"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;