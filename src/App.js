import React, { Component } from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";

//Store
import store from "./store";

//Ant Desgin CSS file
import "antd/dist/antd.css";

//CSS
import "./style/App.css";

//Navbar
import Navbar from "./components/nav/nav";

//Routes
import IndexRoutes from "./routes/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className="layout">
          <Navbar />
          <IndexRoutes />
        </Layout>
      </Provider>
    );
  }
}

export default App;
