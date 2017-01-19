import request from './request';

export const unauthedRequest = (uri, opts = {}) => {
  return request(uri, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    ...opts,
  });
}

export const authedRequest = (uri, authToken, opts = {}) => {
  return request(uri, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authToken,
    },
    ...opts,
  });
}
