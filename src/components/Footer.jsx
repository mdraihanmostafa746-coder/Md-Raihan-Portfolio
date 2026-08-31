function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Md Raihan Mostafa</h3>

          <p>
            Aspiring AI Engineer building with Python,
            Data Science and Machine Learning.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#certifications">Credentials</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/mdraihanmostafa746-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/mdraihan-data/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:raihanmostafa06@gmail.com">
            Email ↗
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Md Raihan Mostafa. All rights reserved.
        </p>

        <p>
          Built with React & Vite
        </p>
      </div>
    </footer>
  );
}

export default Footer;