import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../../services/gameService.js";
import * as commentService from "../../services/commentService.js";
import AuthContext from "../../contexts/authContext.jsx";

export default function Details() {
  const { email } = useContext(AuthContext);
  const [game, setGame] = useState([]);
  const [comments, setComments] = useState([]);
  const { gameId } = useParams();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    gameService.getOne(gameId).then(setGame);
    commentService.getAll(gameId).then(setComments);
  }, [gameId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      gameId,
      formData.get("comment")
    );

    setComments((state) => [...state, { ...newComment, owner: { email } }]);
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {comments.map(({ _id, text, owner: { email } }) => (
              <li key={_id} className="comment">
                <p>
                  {email}: {text}
                </p>
              </li>
            ))}
          </ul>

          {comments.length === 0 ? (
            <p className="no-comment">No comments.</p>
          ) : null}
        </div>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        {/* <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div> */}
      </div>

      {isAuthenticated ? (
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={addCommentHandler}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      ) : null}
    </section>
  );
}
