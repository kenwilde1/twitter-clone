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

  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <div className="home-header">
          <h4>Home</h4>
          <button class="mobile-tweet" onClick={toggleMobileTweet}>
            <i class="fab fa-twitter"></i>
            <p>+</p>
          </button>
          {mobileClicked ? <MobileTweet /> : console.log("no")}
        </div>
        <Tweet />
        <TweetContainer />
      </div>
      <Trending />
    </div>
  );
};
export default Home;
