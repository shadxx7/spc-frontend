import React, { Component } from "react";
import UserMenu from "./user_menu";
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
      <Layout>
        <UserMenu />
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
