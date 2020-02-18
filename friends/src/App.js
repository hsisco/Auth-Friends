import React from 'react';
import { BrowserRouter as Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import FriendsList from './components/FriendsList';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/protected">Your Friends</NavLink>
      </header>

      <Switch>
        <ProtectedRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
