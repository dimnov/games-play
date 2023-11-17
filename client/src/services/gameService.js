const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (title, category, maxLevel, imageUrl, summary) => {
  const response = await fetch(`${baseUrl}/games`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(title, category, maxLevel, imageUrl, summary)
  });

  const result = await response.json();

  return result;
}