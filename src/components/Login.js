import { useState } from "react";
import fire from "../config/Firebase";
import SignUp from "./SignUp";

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [logOrSign, setLogOrSign] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(info.email, info.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleSignUp = () => {
    setLogOrSign((x) => !x);
  };

  return (
    <div className="entry-container">
      {logOrSign ? (
        <div className="login-container">
          <h2>
            Log In to <span>Twitter</span>
          </h2>
          <input
            type="text"
            id="input-email"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
          ></input>
          <input
            type="password"
            id="input-password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          ></input>
          <button onClick={login}>Login</button>
          <button onClick={toggleSignUp}>Don't Have An Account? Sign Up</button>
        </div>
      ) : (
        <SignUp />
      )}
    </div>
  );
};
export default Login;
