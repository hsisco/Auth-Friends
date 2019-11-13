import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { FriendsList } from './components/FriendsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/protected">Your Friends</NavLink>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
