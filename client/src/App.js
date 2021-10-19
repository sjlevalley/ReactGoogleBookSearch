import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import PrivatePage from "./pages/PrivatePage";
// import PrivateRoute from "./components/PrivateRoute";
import Hero from "./components/Hero/Hero"

function App() {

  return (
    // <AuthProvider>
    <Router>
      <Hero />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/private">
          <PrivatePage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
    // </AuthProvider>
  );
}

export default App;
