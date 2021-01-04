import fire from "../config/Firebase";
import Tweet from "./Tweet";
import TweetContainer from "./TweetContainer";

const Home = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div className="home-container">
      <h1>HOME</h1>
      <button onClick={logout}>Log Out</button>
      <Tweet />
      <TweetContainer />
    </div>
  );
};
export default Home;
