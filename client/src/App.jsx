import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from "./services/authService.js";
import AuthContext from "./contexts/authContext.js";
import Path from "./paths.js";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import CreateGame from "./components/create-game/CreateGame.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Details from "./components/details-game/Details.jsx";
import Logout from "./components/logout/logout.jsx";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");

    return {};
  });

  const loginSubmitHandler = async ({ email, password }) => {
    const result = await authService.login(email, password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async ({ email, password }) => {
    const result = await authService.register(email, password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Games} element={<Catalog />} />
          <Route path={Path.Game} element={<Details />} />
          <Route path={Path.Create} element={<CreateGame />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
