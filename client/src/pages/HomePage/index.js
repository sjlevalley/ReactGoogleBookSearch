// import React from "react";
import React, { useEffect, useState } from "react";
import bookAPI from "../../util/bookApi";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import ResultsContainer from "../../components/ResultContainer/ResultContainer";
import SearchForm from "../../components/SearchForm/searchForm";
import useDebounce from "../../util/useDebounce";


function HomePage() {

  // const history = useHistory();
  // const auth = useAuth();
  // console.log("!auth.isLoggedIn():", !auth.isLoggedIn());
  // console.log("auth.user", auth.user);

  const [search, setSearch] = useState("truck");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const debouncedSearchTerm = useDebounce(search, 300);


  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.value)
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value)

  };


  // Test Google Books Search
  useEffect(() => {
    if (!debouncedSearchTerm) {
      return;
    }
    if (debouncedSearchTerm) {
      bookAPI.search(debouncedSearchTerm)
        .then((res) => {
          if (res.data.length === 0) {
            throw new Error('No results found.');
          }
          if (res.data.status === 'error') {
            throw new Error(res.data.message);
          }
          setSearchResults(res.data.items);
          setError('');
        })
        .catch((err) => setError(err.message));
    }

    // the effect callback will be called every time the value of search changes
  }, [debouncedSearchTerm]);


  return (
    <>

      <SearchForm
        handleSearchChange={handleSearchChange}
        handleFormSubmit={handleFormSubmit}
        search={search}
      />
      <ResultsContainer
        searchResults={searchResults}
      />

      {/* hide actions if user is logged in */}
      {/* {!auth.isLoggedIn() && ( */}
      <>
        {/* <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/signup")}>Signup</button> */}
      </>

    </>
  );
}

export default HomePage;
