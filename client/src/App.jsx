import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import CreateGame from "./components/create-game/CreateGame.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Details from "./components/details-game/Details.jsx";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };

  const registerSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/create" element={<CreateGame />} />
        <Route
          path="/login"
          element={<Login loginSubmitHandler={loginSubmitHandler} />}
        />
        <Route
          path="/register"
          element={<Register registerSubmitHandler={registerSubmitHandler} />}
        />
        <Route path="/games/:gameId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
