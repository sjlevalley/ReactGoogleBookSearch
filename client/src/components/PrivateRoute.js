import React from "react";
// import { Redirect, Route } from "react-router-dom";
// import { useAuth } from "../util/auth";
import ResultsContainer from "./ResultContainer/ResultContainer";

// Use this component for routes to which only authenticated users should have
// access. See https://reactrouter.com/web/example/auth-workflow
function PrivateRoute({ children, ...rest }) {
  //   const auth = useAuth();
  //   const render = ({ location }) => {
  //     if (auth.isLoggedIn()) return children;
  //     return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  //   };
  //   return <Route {...rest} render={render} />;
  // }
  return (
    <ResultsContainer />
  )
}

export default PrivateRoute;
