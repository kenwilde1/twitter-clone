const TrendingItem = (props) => {
  return (
    <div className="trending-item">
      <div className="trending-item-content">
        <a href="#">#{props.hashtag}</a>
        <h4>{props.title}</h4>
        <p>{props.tweets} Tweets</p>
      </div>
      <div className="trending-item-image">
        <img src={props.img} alt=""></img>
      </div>
    </div>
  );
};
export default TrendingItem;
