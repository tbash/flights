import 'whatwg-fetch';

const API_ROOT = process.env.REACT_APP_API_ROOT

const parseJSON = (response) => {
  return response.json();
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const request = (uri, options) => {
  return fetch(`${API_ROOT}${uri}`, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

export default request;
