import fire from "../config/Firebase";
import { useState, useEffect } from "react";
import user from "../user.png";

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
            email: fire.auth().currentUser.email,
            name: fire.auth().currentUser.displayName,
          },
        ]);
      });
    });
  };

  const getHandle = (string) => {
    return string.substr(0, string.indexOf("@"));
  };

  useEffect(() => {
    loadTweets();
  }, []);

  useEffect(() => {
    console.log(tweets);
    console.log(fire.auth().currentUser.displayName);
  }, [tweets]);

  return (
    <div className="tweet-container-container">
      {tweets
        .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
        .map((tweet) => (
          <div className="tweet">
            <div className="tweet-header">
              <img src={user} alt="profile" className="tweet-profile"></img>
              <h4>{tweet.name}</h4>
              <p>@{tweet.email}</p>
              <p>{tweet.timestamp}</p>
            </div>
            <div className="tweet-content">
              <p>{tweet.text}</p>
            </div>
            <div className="tweet-interact">
              <i class="far fa-heart"></i>
              <p>{tweet.likes}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default TweetContainer;
