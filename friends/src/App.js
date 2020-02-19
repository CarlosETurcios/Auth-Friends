import React, { useState, useEffect } from 'react';
import PrivateRoute from "./PrivateRoute"
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from "./login"
import { axiosWithAuth } from './utils/axiosWithAuth';
import FriendsList from './FriendsList';

function App() {



  return (

    <Router>
      <div className="App">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/protected">protected</Link></li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" component={FriendsList} />
          <Route path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
