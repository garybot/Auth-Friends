import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends List</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
