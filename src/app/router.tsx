import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Heading} from '@chakra-ui/core';

import Login from '../pages/login';
import ForgotPassword from '../pages/forgot-password';
import Register from '../pages/register';

const Router = () => {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/register" component={Register} />
        <Route path="*" component={() => <Heading>404 Not Found</Heading>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
