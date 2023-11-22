const buildOptions = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'content-type': 'application/json'
    };
  }

  const token = localStorage.getItem('accessToken');

  if (token) {
    options.headers = {
      ...options.headers,
      'X-Authorization': token,
    }
  }

  return options;
}

const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
  });

  if (!response.status === 204) {
    return {};
  }

  if (!response.ok) {
    return {};
  }

  return await response.json();
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
