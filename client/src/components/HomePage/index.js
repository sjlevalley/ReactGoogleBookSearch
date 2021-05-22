import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import ResultsContainer from "../ResultContainer/ResultContainer";
import SearchForm from "../SearchForm/searchForm";


function HomePage() {
  const history = useHistory();
  const auth = useAuth();
  console.log("!auth.isLoggedIn():", !auth.isLoggedIn());
  console.log("auth.user", auth.user);
  return (
    <>

      <SearchForm />
      <ResultsContainer />

      {/* hide actions if user is logged in */}
      {!auth.isLoggedIn() && (
        <>
          {/* <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/signup")}>Signup</button> */}
        </>
      )}
    </>
  );
}

export default HomePage;
