import fetch from 'node-fetch';

const API_ENDPOINT = 'https://api.github.com/search/issues?q=';

/**
 *
 * @param {string} issueTitle
 * @typedef {Object} GithubIssue
 * @property html_url {string}
 * @property title {string}
 * @returns {Promise<GithubIssue[] | null>}
 */
export const getGithubIssues = async (issueTitle) => {
  try {
    const response = await fetch(`${API_ENDPOINT}${issueTitle}&per_page=5`);
    const data = await response.json();
    return data?.items || [];
  } catch (err) {
    console.log(err);
    return null;
  }
};
