import { useContext, useEffect } from "react";
import * as authService from "../../services/authService.js";
import { useNavigate } from "react-router-dom";
import Path from "../../paths.js";
import AuthContext from "../../contexts/authContext.js";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);
  useEffect(() => {
    authService
      .logout()
      .then(() => logoutHandler())
      .catch(() => navigate(Path.Home));
  }, []);

  return;
}
