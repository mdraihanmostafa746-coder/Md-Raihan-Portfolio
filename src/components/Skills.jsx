function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>Technologies I Work With</h2>

          <p>
            A growing technical stack built through learning,
            practice and hands-on projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {/* Programming */}
          <div className="skill-card">
            <div className="skill-number">01</div>

            <h3>Programming</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>C</span>
              <span>C++</span>
              <span>SQL</span>
            </div>
          </div>

          {/* Data Science */}
          <div className="skill-card">
            <div className="skill-number">02</div>

            <h3>Data Science</h3>

            <div className="skill-list">
              <span>NumPy</span>
              <span>Pandas</span>
              <span>Matplotlib</span>
              <span>Data Analysis</span>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="skill-card">
            <div className="skill-number">03</div>

            <h3>Machine Learning</h3>

            <div className="skill-list">
              <span>Scikit-learn</span>
              <span>Regression</span>
              <span>Classification</span>
              <span>ML Fundamentals</span>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <div className="skill-number">04</div>

            <h3>Tools & Technologies</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>MySQL</span>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="skill-card learning-card">
            <div className="skill-number">05</div>

            <h3>Currently Learning</h3>

            <div className="skill-list">
              <span>Machine Learning</span>
              <span>DSA</span>
              <span>Advanced Statistics</span>
              <span>AI Engineering</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;