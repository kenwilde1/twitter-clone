import SearchBar from "./SearchBar";
import fire from "../config/Firebase";

const NavBar = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div className="navbar-container">
      <SearchBar />
      <button onClick={logout}>Log Out</button>
    </div>
  );
};
export default NavBar;
