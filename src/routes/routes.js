import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Signup from '../pages/SignupPage';

export default function Routes() {
  return (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
  );
}