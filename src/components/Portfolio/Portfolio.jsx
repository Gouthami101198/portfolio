import "./Portfolio.css";
import "./PortfolioCard.css";

import portfolioData from "./portfolioData";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">

      <div className="portfolio-header">

        <div className="portfolio-left">

          <span className="portfolio-subtitle">
            Latest Projects
          </span>

          <h2 className="portfolio-heading">
            Projects and
            <br />
            Practice
          </h2>

        </div>

        <button className="see-more-btn">
          See More
        </button>

      </div>

      <div className="portfolio-grid">

        {portfolioData.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
};

export default Portfolio;