import fire from "../config/Firebase";
import { useState } from "react";

const Tweet = () => {
  const [tweet, setTweet] = useState("");

  const db = fire.firestore();

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const createTweet = () => {
    document.querySelector("#input-tweet").value = "";
    const timestamp = Date.now();

    if (
      fire.auth().currentUser.photoURL !==
      "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg"
    ) {
      fire
        .storage()
        .ref("users/" + fire.auth().currentUser.uid + "/profile.jpg")
        .getDownloadURL()
        .then((imgURL) => {
          db.collection("master-collection").doc(`${timestamp}`).set({
            tweet: tweet,
            likes: 0,
            name: fire.auth().currentUser.displayName,
            photoURL: imgURL,
          });
        });
    } else {
      db.collection("master-collection").doc(`${timestamp}`).set({
        tweet: tweet,
        likes: 0,
        name: fire.auth().currentUser.displayName,
        photoURL:
          "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg",
      });
    }
  };

  return (
    <div className="tweet-container">
      <div className="tweet-container-one">
        <img
          src={fire.auth().currentUser.photoURL}
          alt="profile"
          className="profile-pic"
        ></img>
        <input
          type="textarea"
          id="input-tweet"
          onChange={handleChange}
          placeholder="What's happening?"
        ></input>
      </div>
      <div className="tweet-container-two">
        <button onClick={createTweet}>Tweet</button>
      </div>
    </div>
  );
};
export default Tweet;
