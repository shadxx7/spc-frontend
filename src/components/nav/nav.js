import React, { Component } from "react";
import { Button, Layout, Menu, Popover } from "antd";
import { Link } from "react-router-dom";

//CSS
import "../../style/nav.css";

const { Header } = Layout;

const mobileMenu = (
  <Menu theme="dark" mode="vertical" id="side-menu">
    <Menu.Item key="home">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="login">
      <Link to="/login">Login</Link>
    </Menu.Item>
    <Menu.Item key="register">
      <Link to="/signup">Register</Link>
    </Menu.Item>
  </Menu>
);

class Navbar extends Component {
  render() {
    const width = window.innerWidth;
    if (width >= 600) {
      return (
        <Header className="header-style shadow-lg">
          <div className="logo">DA-IICT Placement Cell</div>
          <Menu theme="dark" mode="horizontal" id="top-menu">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          </Menu>
        </Header>
      );
    } else {
      return (
        <Header className="header-style">
          <div>
            <p className="mobile-logo">DA-IICT Placement Cell</p>
            <Popover content={mobileMenu} trigger="click" id="mobile-menu">
              <Button
                ghost="true"
                size="small"
                icon="menu-unfold"
                className="mobile-menu-button"
              />
            </Popover>
          </div>
        </Header>
      );
    }
  }
}

export default Navbar;
