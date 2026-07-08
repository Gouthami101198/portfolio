import "./SkillCard.css";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">

      <div className="skill-icon">
        <img src={skill.image} alt={skill.name} />
      </div>

      <h3 className="skill-name">
        {skill.name}
      </h3>

    </div>
  );
};

export default SkillCard;