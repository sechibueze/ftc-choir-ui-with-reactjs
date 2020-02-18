import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authAction';

import { Provider } from 'react-redux';
import store from './store';

import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/dashboard';
import PersonalInfo from "./components/personalData/personal-info";
import EditPersonalInfo from "./components/personalData/editPersonalInfo";

import PrivateRoute from "./components/private-route/privateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser()); // Redirect to login
        window.location.href = './login';
    }
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="container-fluid">
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login}/>

            </Router>
          </div>

            <Switch>
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/personal-info/:id" exact component={PersonalInfo}/>
                <PrivateRoute path="/edit-personal/:id" exact component={EditPersonalInfo}/>
            </Switch>
        </Provider>
    );
  }
}

export default App;
