import fire from "../config/Firebase";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="searchbar-container">
      <span className="fa fa-search"></span>
      <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Search Twitter"
      ></input>
      {searchTerm !== "" &&
        users
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
                <p className="user-search-handle">
                  @{user.name.split(" ").join("").toLowerCase()}
                </p>
                <p>Name: {user.name}</p>
              </div>
            );
          })}
    </div>
  );
};

export default SearchBar;
