import fire from "../config/Firebase";
import { useEffect, useState } from "react";
import user from "../user.png";

const Tweet = () => {
  const [tweet, setTweet] = useState("");

  const userID = fire.auth().currentUser.uid;
  const db = fire.firestore();

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const createTweet = () => {
    document.querySelector("#input-tweet").value = "";
    const timestamp = Date.now();
    db.collection(`${userID}`).doc(`${timestamp}`).set({
      tweet: tweet,
      likes: 0,
    });
  };

  return (
    <div className="tweet-container">
      <div className="tweet-container-one">
        <img src={user} alt="profile" className="profile-pic"></img>
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
