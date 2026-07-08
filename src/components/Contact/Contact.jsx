import "./Contact.css";
import SocialButton from "./SocialButton";
import socialData from "./socialData";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Left Section */}
        <div className="contact-left">

          <span className="contact-subtitle">
            Testimonials
          </span>

          <h2 className="contact-title">
            Let's Get In
            <br />
            Touch
          </h2>

          <p className="contact-description">
            Have a question, feedback, or interested in collaborating?
            <br />
            We'd love to hear from you!
          </p>

          <h3 className="follow-title">
            Follow
          </h3>

          <div className="social-buttons">
            {socialData.map((social) => (
              <SocialButton
                key={social.id}
                social={social}
              />
            ))}
          </div>

        </div>

        {/* Right Section */}
        <div className="contact-right">

          <form className="contact-form">

            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-row">

              <div className="input-group">
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

            </div>

            <div className="input-group">
              <textarea
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="send-btn"
            >
              Send a Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;