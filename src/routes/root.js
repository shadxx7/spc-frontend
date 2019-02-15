import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//Component Imports
import SignUpForm from "../containers/signup";
import SignInForm from "../containers/signin";
import Home from "../components/home";
import ForgotPassword from "../containers/forgot_password/forgot_password";
import ResetPassword from "../containers/reset_password/reset_password";

const { Content } = Layout;

class RootRoutes extends Component {
  render() {
    return (
      <Content id="content-style">
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password" component={ResetPassword} />
          <Route path="/" component={Home} />
        </Switch>
      </Content>
    );
  }
}

export default RootRoutes;
