import SearchBar from "./SearchBar";
import TrendingItem from "./TrendingItem";
import spongebob from "../images/download.png";
import capitol from "../images/capitol.jpeg";
import snow from "../images/snow.jpeg";
import construction from "../images/construction.jpg";

const Trending = () => {
  return (
    <div className="trending-container">
      <SearchBar />
      <div className="trending">
        <div className="trending-header">
          <h3>What's happening</h3>
        </div>
        <div className="trending-content">
          <TrendingItem
            title="Spongebob announces retirement from Krusty Krab after 20 years of service"
            img={spongebob}
            hashtag={"spongebob"}
            tweets={"101,344"}
          />
          <TrendingItem
            title="DC mayor extends public emergency to 15 days after four people confirmed dead amid violence at the Capitol"
            img={capitol}
            hashtag={"capitolhill"}
            tweets={"55,878"}
          />
          <TrendingItem
            title="Met Eireann issue freezing 18-hour warning for all of Ireland with more snow likely"
            img={snow}
            hashtag={"snow"}
            tweets={"12,021"}
          />
          <TrendingItem
            title="Significant majority of construction projects to close until May, 2021"
            img={construction}
            hashtag={"construction"}
            tweets={"500"}
          />
        </div>
      </div>
    </div>
  );
};
export default Trending;
