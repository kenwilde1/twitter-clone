import fire from "../config/Firebase";
import { useState } from "react";

const MobileTweet = () => {
  const [tweet, setTweet] = useState("");

  const db = fire.firestore();

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const createTweet = () => {
    document.querySelector(".mobile-tweet-container").classList.toggle("hide");
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
    <div className="mobile-tweet-container">
      <div className="mobile-tweet-container-one">
        <img
          src={fire.auth().currentUser.photoURL}
          alt="profile"
          className="profile-pic"
        ></img>
        <input
          type="textarea"
          onChange={handleChange}
          id="mobile-input-tweet"
          placeholder="What's happening?"
        ></input>
      </div>
      <div className="mobile-tweet-container-two">
        <button onClick={createTweet}>Tweet</button>
      </div>
    </div>
  );
};
export default MobileTweet;
