import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from '../pages/login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
