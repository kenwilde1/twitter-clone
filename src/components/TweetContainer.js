import fire from "../config/Firebase";
import { useState, useEffect } from "react";

const TweetContainer = () => {
  const [tweets, setTweets] = useState([
    {
      timestamp: 123431254,
      text: "Sample Tweet",
    },
  ]);

  const userID = fire.auth().currentUser.uid;
  const db = fire.firestore();

  const loadTweets = () => {
    db.collection(`${userID}`).onSnapshot((querySnapshot) => {
      setTweets([]);
      querySnapshot.forEach((doc) => {
        setTweets((prevArray) => [
          ...prevArray,
          {
            timestamp: doc.id,
            text: doc.data().tweet,
            likes: doc.data().likes,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    loadTweets();
  }, []);

  useEffect(() => {
    console.log(tweets);
  }, [tweets]);

  return (
    <div className="tweet-container-container">
      <h3>Tweets:</h3>
      {tweets
        .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
        .map((tweet) => (
          <div className="tweet">
            <h4>{tweet.timestamp}</h4>
            <p>{tweet.text}</p>
            <p>{tweet.likes}</p>
          </div>
        ))}
    </div>
  );
};
export default TweetContainer;
