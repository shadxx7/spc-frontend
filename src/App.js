import React, { Component } from "react";
import { Provider } from "react-redux";

//Store
import store from "./store";

//Ant Desgin CSS file
import "antd/dist/antd.css";

//CSS
import "./style/App.css";

//Routes
import IndexRoutes from "./routes/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IndexRoutes />
      </Provider>
    );
  }
}

export default App;
