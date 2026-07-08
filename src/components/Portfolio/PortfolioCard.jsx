import "./PortfolioCard.css";

const PortfolioCard = ({ project }) => {
  return (
    <div className="portfolio-card">

      {/* Project Number */}
      <span className="project-number">
        {project.number}
      </span>

      {/* Project Title */}
      <h2 className="project-title">
        {project.title}
      </h2>

      {/* Category Tags */}
      <div className="project-tags">

        <span className="tag">
          {project.category1}
        </span>

        <span className="tag">
          {project.category2}
        </span>

      </div>

      {/* Project Image */}
      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      {/* Button */}
      <button className="project-btn">
        {project.button}
      </button>

    </div>
  );
};

export default PortfolioCard;