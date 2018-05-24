import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AdminMain from "../containers/admin";

class AdminRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/admin" component={AdminMain} />
      </Switch>
    );
  }
}

export default AdminRoutes;
