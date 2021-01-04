import fire from "../config/Firebase";
import { useEffect, useState } from "react";

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
      <input
        type="textarea"
        id="input-tweet"
        onChange={handleChange}
        placeholder="What are you thinking?"
      ></input>
      <button onClick={createTweet}>Tweet</button>
    </div>
  );
};
export default Tweet;
