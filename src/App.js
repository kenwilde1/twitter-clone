import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import fire from "./config/Firebase";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser((prevState) => ({ ...prevState, user: user }));
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return <div className="App">{user ? <Home /> : <Login />}</div>;
}

export default App;
