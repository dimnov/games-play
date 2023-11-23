import * as request from '../lib/request.js';

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = async () => {
  const result = await request.get(baseUrl);
  return result;
};

export const getOne = async (gameId) => {
  const result = await request.get(`${baseUrl}/${gameId}`);

  return result;
};

export const create = async (title, category, maxLevel, imageUrl, summary) => {
  const result = await request.post(baseUrl, title, category, maxLevel, imageUrl, summary);

  return result;
}

export const edit = async (gameId, title, category, maxLevel, imageUrl, summary) => {
  const result = await request.put(`${baseUrl}/${gameId}`, title, category, maxLevel, imageUrl, summary);

  return result;
}