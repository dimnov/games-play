import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext.jsx";
import Path from "../../paths.js";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header>
      <h1>
        <Link className="home" to={Path.Home}>
          GamesPlay
        </Link>
      </h1>
      <nav>
        <Link to="games">All games</Link>
        {isAuthenticated ? (
          <div id="user">
            <Link to={Path.Create}>Create Game</Link>
            <Link to={Path.Logout}>Logout</Link>
          </div>
        ) : (
          <div id="guest">
            <Link to={Path.Login}>Login</Link>
            <Link to={Path.Register}>Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
