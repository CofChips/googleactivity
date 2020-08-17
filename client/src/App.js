import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Navbar from "./components/Navbar/myNavbar"
import Container from "react-bootstrap/Container"

function App() {
  return (
  <Container>
      <Router>
        <div>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
        </div>
      </Router>
  </Container>
  );
}


export default App;
