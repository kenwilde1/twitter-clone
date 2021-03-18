import Tweet from "./Tweet";
import TweetContainer from "./TweetContainer";
import SideBar from "./SideBar";
import Trending from "./Trending";
import MobileTweet from "./MobileTweet";
import { useState } from "react";

const Home = () => {
  const [mobileClicked, setMobileClicked] = useState(false);

  const toggleMobileTweet = () => {
    setMobileClicked((x) => !x);
  };

  const isMobile = () => {
    if (mobileClicked) {
      return <MobileTweet />;
    }
  };

  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <div className="home-header">
          <h4>Home</h4>
          <button className="mobile-tweet" onClick={toggleMobileTweet}>
            <i className="fab fa-twitter"></i>
            <p>+</p>
          </button>
          {isMobile()}
        </div>
        <Tweet />
        <TweetContainer />
      </div>
      <Trending />
    </div>
  );
};
export default Home;
