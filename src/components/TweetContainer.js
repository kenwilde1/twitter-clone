import fire from "../config/Firebase";
import firebase from "firebase/app";
import { useState, useEffect } from "react";
import calculateTimestamp from "../utilities/calculateTimestamp";
import calculateFormat from "../utilities/calculateOrder";

const TweetContainer = () => {
  const [tweets, setTweets] = useState([]);

  const db = fire.firestore();

  const loadTweets = () => {
    db.collection(`master-collection`).onSnapshot((querySnapshot) => {
      setTweets([]);
      querySnapshot.forEach((doc) => {
        setTweets((prevArray) => [
          ...prevArray,
          {
            timestamp: calculateTimestamp(doc.id),
            originalTimestamp: doc.id,
            text: doc.data().tweet,
            likes: doc.data().likes,
            name: doc.data().name,
            photoURL: doc.data().photoURL,
            defaultProfilePic: doc.data().defaultProfilePic,
            handle: doc.data().name
              ? doc.data().name.toLowerCase().split(" ").join("")
              : "",
          },
        ]);
      });
    });
  };

  const addLike = (e) => {
    const tweetToUpdate = e.currentTarget.id;
    db.collection("liked-tweets").doc(`${fire.auth().currentUser.uid}`).update({
      tweets: firebase.firestore.FieldValue.arrayUnion(),
    });

    let currentCount = 0;
    db.collection("master-collection")
      .doc(tweetToUpdate)
      .get()
      .then((doc) => {
        currentCount = doc.data().likes;
        db.collection("liked-tweets")
          .doc(`${fire.auth().currentUser.uid}`)
          .get()
          .then((doc) => {
            if (!doc.data().tweets.includes(tweetToUpdate)) {
              db.collection("master-collection")
                .doc(tweetToUpdate)
                .update({
                  likes: currentCount + 1,
                });
              db.collection("liked-tweets")
                .doc(`${fire.auth().currentUser.uid}`)
                .update({
                  tweets: firebase.firestore.FieldValue.arrayUnion(
                    tweetToUpdate
                  ),
                });
            } else {
            }
          });
      });
  };

  useEffect(() => {
    loadTweets();
  }, []);

  return (
    <div className="tweet-container-container">
      {tweets
        .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
        .map((tweet) => (
          <div key={tweet.originalTimestamp} className="tweet">
            <div className="tweet-header">
              <img
                src={tweet.photoURL}
                alt="profile"
                className="tweet-profile"
              ></img>
              <h4>{tweet.name}</h4>
              <p>@{tweet.handle}</p>
              <p>{calculateFormat(tweet.timestamp)}</p>
            </div>
            <div className="tweet-content">
              <p>{tweet.text}</p>
            </div>
            <div
              className="tweet-interact"
              id={tweet.originalTimestamp}
              onClick={addLike}
            >
              <i className="far fa-heart"></i>
              <p>{tweet.likes}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default TweetContainer;
