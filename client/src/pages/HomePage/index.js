// import React from "react";
import React, { useEffect, useState } from "react";
import { bookAPI } from "../../util/bookApi";
// import { useHistory } from "react-router-dom";
// import { useAuth } from "../../util/auth";
import ResultsContainer from "../../components/ResultContainer/ResultContainer";
import SearchForm from "../../components/SearchForm/searchForm";
import useDebounce from "../../util/useDebounce";


function HomePage() {

  // const history = useHistory();
  // const auth = useAuth();
  // console.log("!auth.isLoggedIn():", !auth.isLoggedIn());
  // console.log("auth.user", auth.user);

  const [search, setSearch] = useState("pizza");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchTerm = useDebounce(search, 300);

  // Test Google Books Search
  useEffect(() => {
    bookAPI(debouncedSearchTerm)
      .then((res) => {
        setSearchResults(res)
      })
      .catch(console.error())
  }, [debouncedSearchTerm]);
  function handleSearchChange(event) {
    const value = event.target.value;
    setSearch(value);
  };



  return (
    <>
      <SearchForm
        handleSearchChange={handleSearchChange}
      />
      <ResultsContainer
        search={search}
        searchResults={searchResults}
      />
    </>
  );
}

export default HomePage;