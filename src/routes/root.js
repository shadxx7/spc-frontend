import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//Component Imports
import SignUpForm from "../containers/signup/signup";
import LoginForm from "../containers/login/login";
import Home from "../components/home/home";
import ForgotPassword from "../containers/forgot_password/forgot_password";
import ResetPassword from "../containers/reset_password/reset_password";

const { Content } = Layout;

class RootRoutes extends Component {
  render() {
    return (
      <Content id="content-style">
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password" component={ResetPassword} />
          <Route path="/" component={Home} />
        </Switch>
      </Content>
    );
  }
}

export default RootRoutes;
