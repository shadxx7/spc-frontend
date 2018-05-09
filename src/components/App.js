import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import store from "../store";

import { Layout, Menu } from "antd";

//Ant Desgin CSS file
import "antd/dist/antd.css";

//Component Imports
import SignUpForm from "./signup/signup";
import LoginForm from "./login/login";
import Home from "./home/home";
import ForgotPassword from "./forgot_password/forgot_password";

const { Header, Content, Footer } = Layout;

function handleClick(e) {
  console.log("click", e);
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout className="layout">
            <Header style={{ position: "fixed", width: "100%" }}>
              <div className="logo">DA-IICT Placement Cell</div>
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: "64px", float: "right" }}
                onClick={handleClick}
              >
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/signup">Register</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
              <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                <Switch>
                  <Route path="/signup" component={SignUpForm} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/forgot_password" component={ForgotPassword} />
                  <Route path="/" component={Home} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Student Placement Cell Webstie
            </Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
