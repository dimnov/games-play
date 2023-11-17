import { get, post, put, del } from "../lib/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (gameId, username, text) => {
  const newComment = await post(baseUrl, {
    gameId,
    username,
    text
  });

  return newComment;
}