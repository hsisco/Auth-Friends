import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { FriendsList } from './components/FriendsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/protected">Your Friends</Link>	
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
