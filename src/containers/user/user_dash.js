import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

//CSS
import "../../style/user.css";

const { Sider } = Layout;

class UserDashboard extends Component {
  render() {
    return (
      <Sider width={200} className="user-sider">
        <Menu mode="inline" className="user-menu">
          <Menu.Item key="1">
            <Link to="/user/profile">
              <Icon type="user" />Profile
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/user/employers">
              <Icon type="user" />Employer List
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default UserDashboard;
