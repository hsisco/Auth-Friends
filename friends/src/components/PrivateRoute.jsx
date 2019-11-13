import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { FriendsList } from './FriendsList';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          // if token is in localStorage, render the given component
          return (<FriendsList {...props} />);
        } else {
          return (<Redirect to="/login" />);
      }}}
    />
  );
};