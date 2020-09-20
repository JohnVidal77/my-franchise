import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Heading} from '@chakra-ui/core';

import Login from '../pages/login';
import ForgotPassword from '../pages/forgot-password';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';

const Router = () => {
  return (
    <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={() => <Heading>404 Not Found</Heading>} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
