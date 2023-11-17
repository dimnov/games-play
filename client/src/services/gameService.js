import { get, post, put, del } from "../lib/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
  const result = await get(baseUrl);

  return Object.values(result);
};


export const getOne = async (gameId) => {
  const result = await get(`${baseUrl}/${gameId}`);

  return result;
};

export const create = async (title, category, maxLevel, imageUrl, summary) => {
  const result = await post(baseUrl, title, category, maxLevel, imageUrl, summary);

  return result;
}