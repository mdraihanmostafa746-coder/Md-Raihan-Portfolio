function Journey() {
  return (
    <section id="journey" className="journey-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-heading">
          <p className="section-label">MY JOURNEY</p>

          <h2>Learning, Building & Growing</h2>

          <p>
            My journey from programming fundamentals toward AI Engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="journey-timeline">

          {/* Python */}
          <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-date">
              May 2026
            </div>

            <div className="journey-card">
              <span className="journey-number">01</span>

              <h3>Python & Programming</h3>

              <p>
                Built a strong foundation in Python programming,
                problem solving and core programming concepts.
              </p>

              <div className="journey-tags">
                <span>Python</span>
                <span>Programming</span>
              </div>
            </div>
          </div>

          {/* SQL */}
          <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-date">
              June 2026
            </div>

            <div className="journey-card">
              <span className="journey-number">02</span>

              <h3>SQL & MySQL</h3>

              <p>
                Learned database fundamentals, SQL queries and
                MySQL while building database-driven applications.
              </p>

              <div className="journey-tags">
                <span>SQL</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Data Analysis */}
          <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-date">
              Jul – Aug 2026
            </div>

            <div className="journey-card">
              <span className="journey-number">03</span>

              <h3>Data Analysis</h3>

              <p>
                Worked with datasets using Python-based data analysis
                tools and developed practical analysis projects.
              </p>

              <div className="journey-tags">
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
              </div>
            </div>
          </div>

          {/* Mathematics */}
          <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-date">
              ML Foundation
            </div>

            <div className="journey-card">
              <span className="journey-number">04</span>

              <h3>Mathematics for ML</h3>

              <p>
                Strengthened the mathematical foundation required
                for machine learning.
              </p>

              <div className="journey-tags">
                <span>Statistics</span>
                <span>Probability</span>
                <span>Linear Regression</span>
              </div>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="journey-item current">
            <div className="journey-dot"></div>

            <div className="journey-date">
              Aug 2026 – Present
            </div>

            <div className="journey-card">
              <span className="journey-number">05</span>

              <h3>Machine Learning</h3>

              <p>
                Currently building a strong foundation in supervised
                machine learning and moving toward more advanced ML concepts.
              </p>

              <div className="journey-tags">
                <span>Supervised ML</span>
                <span>Regression</span>
                <span>Classification</span>
              </div>

              <span className="current-badge">
                CURRENT FOCUS
              </span>
            </div>
          </div>

          {/* DSA */}
          <div className="journey-item">
            <div className="journey-dot"></div>

            <div className="journey-date">
              Aug 2026 – Present
            </div>

            <div className="journey-card">
              <span className="journey-number">06</span>

              <h3>DSA & Problem Solving</h3>

              <p>
                Developing problem-solving skills and strengthening
                algorithmic thinking alongside machine learning.
              </p>

              <div className="journey-tags">
                <span>DSA</span>
                <span>C++</span>
              </div>
            </div>
          </div>

          {/* Goal */}
          <div className="journey-item goal">
            <div className="journey-dot"></div>

            <div className="journey-date">
              Long-Term Goal
            </div>

            <div className="journey-card">
              <span className="journey-number">07</span>

              <h3>AI Engineering</h3>

              <p>
                Building the skills required to design, develop and
                deploy practical AI-powered systems.
              </p>

              <div className="journey-tags">
                <span>AI</span>
                <span>Machine Learning</span>
                <span>AI Engineering</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Journey;