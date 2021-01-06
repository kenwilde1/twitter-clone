import fire from "../config/Firebase";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from "./Profile";

const SearchBar = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadUsers = () => {
    fire
      .firestore()
      .collection("user-data")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUsers((prevArray) => [
            ...prevArray,
            { name: doc.data().name, id: doc.id },
          ]);
        });
      });
  };

  const visitProfile = (e) => {
    console.log(e.target.innerHTML);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="searchbar-container">
      <span class="fa fa-search"></span>
      <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Search Twitter"
      ></input>
      {searchTerm !== ""
        ? users
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((user) => {
              return (
                <div className="user-search-result">
                  <p className="user-search-handle" onClick={visitProfile}>
                    @{user.id}
                  </p>
                  <p>Name: {user.name}</p>
                </div>
              );
            })
        : console.log("no")}
    </div>
  );
};

export default SearchBar;
