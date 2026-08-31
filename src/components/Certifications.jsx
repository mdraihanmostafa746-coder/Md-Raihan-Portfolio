const certifications = [
  {
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    type: "Certification",
    link: "https://www.credly.com/org/ibm-skillsbuild/badge/artificial-intelligence-fundamentals",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM Cognitive Class",
    type: "Course",
    link: null,
  },
  {
    title: "Python Beginner to Advance",
    issuer: "MindLuster",
    source: "Saumya Singh",
    type: "Certification",
    link: "https://www.mindluster.com/student/certificate/f607fb9a",
  },
  {
    title: "SQL for Data Science",
    issuer: "Simplilearn",
    source: "Apna College",
    type: "Certification",
    link: "https://simpli-web.app.link/e/EEKvmnSJ15b",
  },
  {
    title: "NumPy",
    issuer: "Simplilearn",
    source: "Coding with Sagar",
    type: "Certification",
    link: "https://simpli-web.app.link/e/QxlDyZTJ15b",
  },
  {
    title: "Pandas",
    issuer: "Intellipaat",
    source: "Coding with Sagar",
    type: "Certification",
    credentialId: "31679-4334-367480",
    link: "https://intellipaat.com/academy/certificate-link/?Yz00MzM0JnU9MzY3NDgwJmV4dD0x",
  },
  {
    title: "AI Tool Workshop",
    issuer: "BE10X",
    type: "Workshop",
    link: null,
  },
];

const learningCredentials = [
  {
    title: "Matplotlib & Seaborn",
    source: "Coding with Sagar",
    type: "Learning",
  },
];

const kaggleAchievements = [
  {
    title: "Python Coder",
    link: "https://www.kaggle.com/certification/badges/mdraihanmostafa/30",
  },
  {
    title: "Code Uploader",
    link: "https://www.kaggle.com/certification/badges/mdraihanmostafa/33",
  },
  {
    title: "Community Member",
    link: "https://www.kaggle.com/certification/badges/mdraihanmostafa/101",
  },
  {
    title: "Collector",
    link: "https://www.kaggle.com/certification/badges/mdraihanmostafa/42",
  },
  {
    title: "Bookmarker",
    link: "https://www.kaggle.com/certification/badges/mdraihanmostafa/43",
  },
  {
    title: "Vampire",
    link: "https://www.kaggle.com/certification/badges/mdraihanmostafa/44",
  },
  {
    title: "7 Day Login Streak",
    link: "https://www.kaggle.com/certification/badges/mdraihanmostafa/56",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">

        {/* Header */}
        <div className="section-heading">
          <p className="section-label">CREDENTIALS</p>

          <h2>Certifications & Achievements</h2>

          <p>
            Selected credentials and learning achievements from my
            technical journey.
          </p>
        </div>

        {/* Certifications */}
        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.title}
            >
              <div className="certificate-top">
                <span className="certificate-type">
                  {certificate.type}
                </span>

                <span className="certificate-number">
                  ↗
                </span>
              </div>

              <h3>{certificate.title}</h3>

              <p className="certificate-issuer">
                {certificate.issuer}
              </p>

              {certificate.source && (
                <p className="certificate-source">
                  Learning source: {certificate.source}
                </p>
              )}

              {certificate.credentialId && (
                <p className="certificate-id">
                  ID: {certificate.credentialId}
                </p>
              )}

              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-button"
                >
                  View Credential ↗
                </a>
              )}

              {!certificate.link && (
                <span className="credential-unavailable">
                  Certificate available
                </span>
              )}
            </article>
          ))}
        </div>

        {/* Learning */}
        <div className="learning-credentials">
          <div className="subsection-heading">
            <p className="section-label">LEARNING</p>
            <h3>Additional Learning</h3>
          </div>

          <div className="learning-card">
            {learningCredentials.map((item) => (
              <div key={item.title}>
                <span>{item.title}</span>
                <small>
                  {item.source}
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Kaggle */}
        <div className="kaggle-section">

          <div className="subsection-heading">
            <p className="section-label">KAGGLE</p>

            <h3>Achievements</h3>
          </div>

          <div className="kaggle-grid">
            {kaggleAchievements.map((achievement) => (
              <a
                key={achievement.title}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="kaggle-badge"
              >
                <span className="kaggle-icon">◆</span>

                <span>
                  {achievement.title}
                </span>

                <span className="kaggle-arrow">
                  ↗
                </span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;