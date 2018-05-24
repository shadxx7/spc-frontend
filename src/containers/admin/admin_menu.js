import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

class AdminMenu extends Component {
  render() {
    return (
      <Sider width={200} className="admin-sider">
        <Menu mode="inline" className="admin-menu">
          <Menu.Item key="1">
            <Link to="/admin/users">
              <Icon type="user" />Users
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default AdminMenu;
