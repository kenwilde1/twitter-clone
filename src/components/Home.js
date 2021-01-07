import Tweet from "./Tweet";
import TweetContainer from "./TweetContainer";
import SideBar from "./SideBar";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <div className="home-header">
          <h4>Home</h4>
        </div>
        <Tweet />
        <TweetContainer />
      </div>
      <Trending />
    </div>
  );
};
export default Home;
