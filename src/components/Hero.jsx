function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>

          <h1>Md Raihan Mostafa</h1>

          <h2>Aspiring AI Engineer</h2>

          <p className="hero-description">
            Data Science student building practical projects with Python,
            SQL and Machine Learning.
          </p>

          {/* Technology Tags */}
          <div className="hero-tags">
            <span>Python</span>
            <span>Data Science</span>
            <span>Machine Learning</span>
            <span>SQL</span>
            <span>AI</span>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects <span>→</span>
            </a>

            <a
              href="https://github.com/mdraihanmostafa746-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/mdraihan-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Profile */}
        <div className="hero-profile">
          <div className="profile-ring">
            <img
              src="/profile/profile.jpg"
              alt="Md Raihan Mostafa"
              className="hero-profile-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;