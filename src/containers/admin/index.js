import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//CSS
import "../../style/admin.css";

// Comonents
import AdminMenu from "./admin_menu";
import UserList from "./user_list";
import UserShow from "./user_show";

const { Content } = Layout;

class AdminMain extends Component {
  render() {
    return (
      <Layout className="admin-main">
        <AdminMenu />
        <Layout>
          <Content className="admin-content">
            <Switch>
              <Route path="/admin/users" component={UserList} />
              <Route path="/:sid" component={UserShow} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AdminMain;
