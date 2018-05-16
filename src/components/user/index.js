import React, { Component } from "react";
import UserDashboard from "./user_dash";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//CSS
import "../../style/user.css";

import UserProfile from "./profile";

const { Content } = Layout;

class UserMain extends Component {
  render() {
    return (
      <Layout className="user-main">
        <UserDashboard />
        <Layout>
          <Content className="user-content">
            <Switch>
              <Route path="/user/profile" component={UserProfile} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default UserMain;
