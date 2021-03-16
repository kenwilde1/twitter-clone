import fire from "../config/Firebase";
import { useState, useEffect } from "react";
import firebase from "firebase/app";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    handle: "",
    password: "",
    profilePic:
      "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const chooseFile = (e) => {
    userInfo.profilePic = e.target.files[0];
  };

  const signup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((result) => {
        fire
          .storage()
          .ref("users/" + result.user.uid + "/profile.jpg")
          .put(userInfo.profilePic)
          .then(() => {
            console.log("succesfully uploaded");

            fire
              .storage()
              .ref("users/" + result.user.uid + "/profile.jpg")
              .getDownloadURL()
              .then((imgURL) => {
                if (
                  userInfo.profilePic !=
                  "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg"
                ) {
                  result.user.updateProfile({
                    photoURL: imgURL,
                    displayName: userInfo.name,
                  });
                } else {
                  result.user.updateProfile({
                    photoURL: userInfo.profilePic,
                    displayName: userInfo.name,
                  });
                }
              });
          });

        fire.firestore().collection("liked-tweets").doc(result.user.uid).set({
          tweets: firebase.firestore.FieldValue.arrayUnion(),
        });

        fire.firestore().collection("user-data").doc(`${userInfo.email}`).set({
          name: userInfo.name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-container">
      <h2>
        Sign Up to <span>Twitter</span>
      </h2>
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
      <label>Upload a Profile Picture</label>
      <input type="file" onChange={chooseFile} name="profile-pic"></input>
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};
export default SignUp;
