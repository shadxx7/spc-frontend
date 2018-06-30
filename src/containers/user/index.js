import React, { Component } from "react";
import UserDashboard from "./user_dash";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//CSS
import "../../style/user.css";

import UserProfile from "./profile";
import UserEmployerList from "./user_employer_list";

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
              <Route path="/user/employers" component={UserEmployerList} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default UserMain;
