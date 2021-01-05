import fire from "../config/Firebase";
import { useState, useEffect } from "react";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handle = userInfo.email
    .toString()
    .substr(0, userInfo.email.indexOf("@"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const signup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((result) => {
        return result.user.updateProfile({
          displayName: userInfo.name,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    fire.firestore().collection("user-data").doc(`${userInfo.email}`).set({
      name: userInfo.name,
      handle: handle,
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up to Twitter</h2>
      <input
        type="text"
        id="input-name"
        name="name"
        onChange={handleChange}
        placeholder="Full Name"
      ></input>
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
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};
export default SignUp;
