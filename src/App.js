import React, { Component } from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

//Store
import store from "./store";

//Ant Desgin CSS file
import "antd/dist/antd.css";

//CSS
import "./style/App.css";

//Routes
import SuperRoute from "./routes/index";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className="layout">
          <Header className="header-style">
            <div className="logo">DA-IICT Placement Cell</div>
            <Menu theme="dark" mode="horizontal" id="top-menu">
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/signup">Register</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content id="content-style">
            <div className="content-wrapper">
              <SuperRoute />
            </div>
          </Content>
          <Footer className="footer-style">
            Student Placement Cell Webstie
          </Footer>
        </Layout>
      </Provider>
    );
  }
}

export default App;
