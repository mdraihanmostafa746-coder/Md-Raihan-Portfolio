import { useEffect, useState } from "react";
import { getGitHubRepositories } from "../services/github";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getGitHubRepositories();
        setProjects(data.slice(0, 4));
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError("Unable to load GitHub projects.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-heading">
          <p className="section-label">MY WORK</p>

          <h2>Featured Projects</h2>

          <p>
            My latest projects, automatically synced from GitHub.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="projects-status">
            Loading projects...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="projects-status">
            {error}
          </div>
        )}

        {/* Projects */}
        {!loading && !error && (
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>

                {/* Top */}
                <div className="project-top">
                  <span className="project-icon">
                    &lt;/&gt;
                  </span>

                  <span className="project-arrow">
                    ↗
                  </span>
                </div>

                {/* Project Name */}
                <h3>{project.name}</h3>

                {/* Description */}
                <p className="project-description">
                  {project.description ||
                    "A project built and maintained on GitHub."}
                </p>

                {/* Project Information */}
                <div className="project-meta">

                  {project.language && (
                    <span>{project.language}</span>
                  )}

                  <span>
                    Updated{" "}
                    {new Date(
                      project.pushed_at
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                </div>

                {/* GitHub Link */}
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>

              </article>
            ))}
          </div>
        )}

        {/* More Projects */}
        <div className="more-projects">
          <a
            href="https://github.com/mdraihanmostafa746-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="more-projects-button"
          >
            More Projects on GitHub ↗
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;