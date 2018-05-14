import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//Component Imports
import SignUpForm from "../components/signup/signup";
import LoginForm from "../components/login/login";
import Home from "../components/home/home";
import ForgotPassword from "../components/forgot_password/forgot_password";
import ResetPassword from "../components/reset_password/reset_password";

class SuperRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/forgot_password" component={ForgotPassword} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default SuperRoute;
