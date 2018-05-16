import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//All Routes Import
import RootRoutes from "./root";
import UserRoutes from "./user";

class IndexRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/user" component={UserRoutes} />
        <Route path="/" component={RootRoutes} />
      </Switch>
    );
  }
}

export default IndexRoutes;
