import "./Skills.css";
import SkillCard from "./SkillCard";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      {/* Section Header */}
      <div className="skills-header">

        <span className="skills-subtitle">
          Skills
        </span>

        <h2 className="skills-title">
          Exploring My
          <br />
          Diverse Skill Set
        </h2>

      </div>

      {/* Skills Grid */}
      <div className="skills-grid">

        {skillsData.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
          />
        ))}

      </div>

    </section>
  );
};

export default Skills;