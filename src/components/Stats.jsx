import { useEffect, useState } from "react";
import { getGitHubRepositories } from "../services/github";

function Stats() {
  const [stats, setStats] = useState({
    projects: 0,
    technologies: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const repositories = await getGitHubRepositories();

        // Count unique programming languages
        const languages = new Set(
          repositories
            .map((repo) => repo.language)
            .filter(Boolean)
        );

        setStats({
          projects: repositories.length,
          technologies: languages.size,
        });
      } catch (error) {
        console.error("GitHub Stats Error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">

        {/* Projects */}
        <div className="stat-card">
          <span className="stat-number">
            {loading ? "—" : stats.projects}
          </span>

          <span className="stat-label">
            Projects
          </span>

          <span className="stat-source">
            GitHub
          </span>
        </div>

        {/* Technologies */}
        <div className="stat-card">
          <span className="stat-number">
            {loading ? "—" : stats.technologies}
          </span>

          <span className="stat-label">
            Technologies
          </span>

          <span className="stat-source">
            GitHub
          </span>
        </div>

        {/* Contributions */}
        <div className="stat-card">
          <span className="stat-number">
            —
          </span>

          <span className="stat-label">
            Contributions
          </span>

          <span className="stat-source">
            GitHub
          </span>
        </div>

      </div>
    </section>
  );
}

export default Stats;