import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { AuthProvider } from "./util/auth";
// import { get as getUser } from "./util/userApi";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import PrivatePage from "./pages/PrivatePage";
import PrivateRoute from "./components/PrivateRoute";
import Hero from "./components/Hero/Hero"

function App() {

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
