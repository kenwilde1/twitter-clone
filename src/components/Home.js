import fire from "../config/Firebase";

const Home = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div className="home-container">
      <h1>HOME</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};
export default Home;
