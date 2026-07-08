import "./Services.css";
import ServiceCard from "./ServiceCard";
import servicesData from "./servicesData";

import serviceImage from "../../assets/services/service-image.png";

const Services = () => {
  return (
    <section className="services" id="services">

      <div className="services-top">

        <div className="services-heading">

          <span className="services-subtitle">
            My Services
          </span>

          <h2>
            Unmatched Services
            <br />
            for Your Needs
          </h2>

        </div>

        <button className="project-btn">
          Start a Project
        </button>

      </div>

      <div className="services-container">

        {/* Left Image */}

        <div className="services-image">

          <img
            src={serviceImage}
            alt="Services"
          />

        </div>

        {/* Right Side */}

        <div className="services-list">

          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;