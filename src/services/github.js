const GITHUB_USERNAME = "mdraihanmostafa746-coder";

const EXCLUDED_REPOSITORIES = [
  "DSA_Learning",
  "ML_Learning",
  "mdraihanmostafa746-coder",
  "Python-Mini-Project",
  "C_Classworks",
];

export async function getGitHubRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  const repositories = await response.json();

  return repositories.filter(
    (repo) =>
      !repo.fork &&
      !EXCLUDED_REPOSITORIES.includes(repo.name)
  );
}