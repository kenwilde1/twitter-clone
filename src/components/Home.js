import Tweet from "./Tweet";
import TweetContainer from "./TweetContainer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h4>Home</h4>
      </div>
      <Tweet />
      <TweetContainer />
    </div>
  );
};
export default Home;
