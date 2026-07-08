import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">

      <div className="logo">
        <Link to="/">Logo</Link>
      </div>

      <nav className="navbar">
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-btn">
        <Link to="/contact" className="connect-btn">
          Let's Connect
        </Link>
      </div>

    </header>
  );
};

export default Header;