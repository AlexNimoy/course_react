import request from 'superagent';

const ROOT_URL = 'https://api.github.com';
const getReposUrl = (company) => `/orgs/${company}/repos`;

const fetchRepos = () => (
  request
    .get(`${ROOT_URL}${getReposUrl('facebook')}`)
    .then((response) => response.body.map((repo) => repo.name))
);

export default fetchRepos;
