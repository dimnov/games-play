import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext.jsx";
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
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
