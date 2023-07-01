import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/home/Home';
import Home from './pages/login/Login';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Home} />
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
