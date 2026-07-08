import "./Contact.css";

const SocialButton = ({ social }) => {
  const Icon = social.icon;

  return (
    <a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn"
    >
      <Icon className="social-icon" />
      <span>{social.name}</span>
    </a>
  );
};

export default SocialButton;