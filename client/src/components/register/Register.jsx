import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={RegisterFormKeys.Email}
            placeholder="maria@email.com"
            onChange={onChange}
            value={values[RegisterFormKeys.value]}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name={RegisterFormKeys.Password}
            id="register-password"
            onChange={onChange}
            value={values[RegisterFormKeys.value]}
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name={RegisterFormKeys.ConfirmPassword}
            id="confirm-password"
            onChange={onChange}
            value={values[RegisterFormKeys.value]}
          />

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <Link to="login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
