import fire from "../config/Firebase";

const SideBar = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-list-container">
        <ul>
          <li className="logo">
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fas fa-home"></i>
            Home
          </li>
          <li>
            <i className="fas fa-bell"></i>
            <p>Notifications</p>
          </li>
          <li>
            <i className="fas fa-hashtag"></i>Explore
          </li>
          <li>
            <i className="far fa-envelope"></i>Messages
          </li>
          <li>
            <i className="far fa-bookmark"></i>Bookmarks
          </li>
          <li>
            <i className="far fa-list-alt"></i>Lists
          </li>
          <li>
            <i className="far fa-user"></i>Profile
          </li>
          <li>
            <i className="fas fa-ellipsis-h"></i>More
          </li>
        </ul>
        <div className="logout-container">
          <button onClick={logout}>
            <img src={fire.auth().currentUser.photoURL} alt="profile-pic" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
