export default function EditGame() {
  return (
    <section id="edit-page" className="auth">
      <form id="edit">
        <div className="container">
          <h1>Edit Game</h1>
          <label for="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" value="" />

          <label for="category">Category:</label>
          <input type="text" id="category" name="category" value="" />

          <label for="levels">MaxLevel:</label>
          <input type="number" id="maxLevel" name="maxLevel" min="1" value="" />

          <label for="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" value="" />

          <label for="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
}
