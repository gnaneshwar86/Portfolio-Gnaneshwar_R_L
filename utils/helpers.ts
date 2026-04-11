const capitalize = (s: string): string => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const getGitHubOwnerAndRepoFromLink = (link: string): string => {
  if (!link || link === "#") return "";
  const match = link.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return link;
  const [, owner, repo] = match;
  return `${owner}/${repo}`;
};

const cleanLink = (link: string): string => {
  return link.replace(/^https?:\/\//, "");
};

export { capitalize, getGitHubOwnerAndRepoFromLink, cleanLink };
