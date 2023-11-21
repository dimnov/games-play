import { Routes, Route } from "react-router-dom";

import * as authService from "./services/authService.js";
import AuthContext from "./contexts/authContext.js";

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

  const loginSubmitHandler = async ({ email, password }) => {
    const result = await authService.login(email, password);

    setAuth(result);
  };

  const registerSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Catalog />} />
          <Route path="/games/create" element={<CreateGame />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={<Register registerSubmitHandler={registerSubmitHandler} />}
          />
          <Route path="/games/:gameId" element={<Details />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
