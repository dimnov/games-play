import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
