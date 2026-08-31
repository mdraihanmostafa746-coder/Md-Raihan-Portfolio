function Contact() {
  const email = "raihanmostafa06@gmail.com";

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="contact-card">

          <div className="contact-content">
            <p className="section-label">GET IN TOUCH</p>

            <h2>Let's Connect</h2>

            <p>
              Have a project, opportunity or idea?
              Feel free to reach out and let's connect.
            </p>

            <a
              href={`mailto:${email}`}
              className="contact-email"
            >
              {email}
            </a>
          </div>

          <div className="contact-actions">

            <a
              href={`mailto:${email}?subject=Portfolio%20Contact`}
              className="primary-button"
            >
              Email Me →
            </a>

            <a
              href="https://www.linkedin.com/in/mdraihan-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/mdraihanmostafa746-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;