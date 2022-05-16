const BASE_URL = "/api";

async function get(endpoint, params = {}) {
  const url = BASE_URL + endpoint;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${params.user.token}`
    }
  });
  return res;
}

async function post(endpoint, params = {}) {
  const url = BASE_URL + endpoint;
  let res;
  if (!params.user) {
    res = await fetch(url, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(params)
    });
    
  } else {
    res = await fetch(url, {
      method: "POST",
      headers: {
        authorization: `Bearer ${params.user.token}`, 
        "Content-type": "application/json"
      },
      body: JSON.stringify(params.body)
    })
  }
  return res;
}

async function delTodo(endpoint, params = {}) {
  const url = BASE_URL + endpoint;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${params.user.token}`
    }
  })
  return res;
}

export {
  get,
  post,
  delTodo
};