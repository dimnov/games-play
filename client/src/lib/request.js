const buildOptions = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'content-type': 'application/json'
    };
  }

  return options;
}

const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    return response;
  }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
