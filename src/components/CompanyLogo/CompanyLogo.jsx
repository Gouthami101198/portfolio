import "./CompanyLogo.css";

import verizon from "../../assets/logos/verizon.png";
import lenovo from "../../assets/logos/lenovo.png";
import slack from "../../assets/logos/slack.png";
import youtube from "../../assets/logos/youtube.png";
import amazon from "../../assets/logos/amazon.png";
import google from "../../assets/logos/google.png";
import microsoft from "../../assets/logos/microsoft.png";

const CompanyLogo = () => {
  return (
    <section className="company-logo">

      <div className="company-heading">

        <span className="heading-line"></span>

        <h2>+240 satisfied clients</h2>

      </div>

      <div className="company-container">

        <div className="company-item">
          <img src={verizon} alt="Verizon" />
        </div>

        <div className="company-item">
          <img src={lenovo} alt="Lenovo" />
        </div>

        <div className="company-item">
          <img src={slack} alt="Slack" />
        </div>

        <div className="company-item">
          <img src={youtube} alt="YouTube" />
        </div>

        <div className="company-item">
          <img src={amazon} alt="Amazon" />
        </div>

        <div className="company-item">
          <img src={google} alt="Google" />
        </div>

        <div className="company-item">
          <img src={microsoft} alt="Microsoft" />
        </div>

      </div>

    </section>
  );
};

export default CompanyLogo;