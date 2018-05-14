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
import SuperRoute from "./routes/index";

const { Content } = Layout;

class App extends Component {
  state = {
    current: "home"
  };

  render() {
    return (
      <Provider store={store}>
        <Layout className="layout">
          <Navbar />
          <Content id="content-style">
            <div>
              <SuperRoute />
            </div>
          </Content>
        </Layout>
      </Provider>
    );
  }
}

export default App;
