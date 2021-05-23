import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
// import { AuthProvider } from "./util/auth";
import { get as getUser } from "./util/userApi";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import PrivatePage from "./pages/PrivatePage";
// import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import Hero from "./components/Hero/Hero"

function App() {

  // Test Google Books Search
  // useEffect(() => {
  //   axios
  //     .get("https://www.googleapis.com/books/v1/volumes?q=quilting")
  //     .then(console.log)
  //     .catch(console.log);
  // });

  return (
    // <AuthProvider>
    <Router>
      <Navbar />
      <Hero />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route path="/login">
            <LoginPage />
          </Route> */}
        <PrivateRoute path="/private">
          <PrivatePage />
        </PrivateRoute>
        {/* <Route path="/signup">
            <SignupPage />
          </Route> */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
    // </AuthProvider>
  );
}

export default App;
