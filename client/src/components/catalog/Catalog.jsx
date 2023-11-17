import { useEffect, useState } from "react";
import { getAll } from "../../services/gameService.js";
import CatalogItem from "./catalog-item/CatalogItem.jsx";

export default function Catalog() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAll().then((games) => setGames(games));
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {games.map((game) => (
        <CatalogItem key={game._id} {...game} />
      ))}

      {games.length === 0 ? (
        <h3 className="no-articles">No articles yet</h3>
      ) : null}
    </section>
  );
}
