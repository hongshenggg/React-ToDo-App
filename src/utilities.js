const BASE_URL = "http://localhost:8000/api";

async function get(endpoint, params = {}) {
  const url = BASE_URL + endpoint;
  const res = await fetch(url);
  return res;
}

async function post(endpoint, params = {}) {
  const url = BASE_URL + endpoint;
  const res = await fetch(url, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(params)
  });
  return res;
}

export {
  get,
  post
};