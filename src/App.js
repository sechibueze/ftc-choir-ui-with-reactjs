import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
        </Router>
      </div>
    );
  }
}

export default App;
