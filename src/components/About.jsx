function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>Building My Path in AI & Data</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm a Data Science student focused on building a strong
              foundation in programming, data analysis and machine learning.
            </p>

            <p>
              I work with Python, SQL and data science tools while
              continuously developing practical projects and improving
              my problem-solving skills.
            </p>

            <p>
              My long-term goal is to grow into an AI Engineer by combining
              software development, machine learning and real-world problem
              solving.
            </p>
          </div>

          <div className="about-highlights">

            <div className="about-item">
              <span className="about-icon">01</span>

              <div>
                <h3>Data Science</h3>
                <p>
                  Working with data, analysis and visualization.
                </p>
              </div>
            </div>

            <div className="about-item">
              <span className="about-icon">02</span>

              <div>
                <h3>Machine Learning</h3>
                <p>
                  Learning ML concepts and building practical models.
                </p>
              </div>
            </div>

            <div className="about-item">
              <span className="about-icon">03</span>

              <div>
                <h3>Problem Solving</h3>
                <p>
                  Strengthening programming and DSA fundamentals.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;