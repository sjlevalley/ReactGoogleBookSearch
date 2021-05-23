// import React from "react";
import React, { useEffect, useState } from "react";
import bookAPI from "../../util/bookApi";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import ResultsContainer from "../../components/ResultContainer/ResultContainer";
import SearchForm from "../../components/SearchForm/searchForm";


function HomePage() {

  // const history = useHistory();
  // const auth = useAuth();
  // console.log("!auth.isLoggedIn():", !auth.isLoggedIn());
  // console.log("auth.user", auth.user);

  const [search, setSearch] = useState("car");
  const [searchResults, setSearchResults] = useState([]);

  // Test Google Books Search
  useEffect(() => {
    bookAPI.search(search)
      .then(console.log)
      .catch(console.log);
  });

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <>

      <SearchForm
        handleSearchChange={handleSearchChange}
      />
      <ResultsContainer />

      {/* hide actions if user is logged in */}
      {/* {!auth.isLoggedIn() && ( */}
      <>
        {/* <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/signup")}>Signup</button> */}
      </>
      )}
    </>
  );
}

export default HomePage;
