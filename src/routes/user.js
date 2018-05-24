import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//User Views
import UserMain from "../containers/user";

class UserRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/user" component={UserMain} />
      </Switch>
    );
  }
}

export default UserRoutes;
