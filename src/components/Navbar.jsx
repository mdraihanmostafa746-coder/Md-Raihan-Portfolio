function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="nav-logo">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span>Md Raihan Mostafa</span>
        </a>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* External Links */}
        <div className="nav-actions">

          <a
            href="https://github.com/mdraihanmostafa746-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/mdraihan-data/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
          >
            LinkedIn ↗
          </a>

          {/* Resume */}
          <a
            href="/resume/Md-Raihan-Mostafa-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            Resume ↗
          </a>

        </div>

      </div>
    </header>
  );
}

export default Navbar;