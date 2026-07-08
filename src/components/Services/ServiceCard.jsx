import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className={`service-card ${service.active ? "active" : ""}`}>

      <div className="service-header">

        <div className="service-left">

          <h2 className="service-title">
            {service.title}
          </h2>

        </div>

        <div className="service-number">
          {service.number}
        </div>

      </div>

      {service.active && (

        <div className="service-content">

          <p className="service-description">
            {service.description}
          </p>

          <div className="service-features">

            {service.features.map((feature, index) => (
              <div className="feature-item" key={index}>
                • {feature}
              </div>
            ))}

          </div>

        </div>

      )}

    </div>
  );
};

export default ServiceCard;