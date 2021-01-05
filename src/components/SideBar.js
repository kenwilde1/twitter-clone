const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-list-container">
        <ul>
          <li className="logo">
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fas fa-home"></i>
            Home
          </li>
          <li>
            <i class="fas fa-bell"></i>
            <p>Notifications</p>
          </li>
          <li>
            <i class="fas fa-hashtag"></i>Explore
          </li>
          <li>
            <i class="far fa-envelope"></i>Messages
          </li>
          <li>
            <i class="far fa-bookmark"></i>Bookmarks
          </li>
          <li>
            <i class="far fa-list-alt"></i>Lists
          </li>
          <li>
            <i class="far fa-user"></i>Profile
          </li>
          <li>
            <i class="fas fa-ellipsis-h"></i>More
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;