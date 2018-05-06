import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Button } from "antd";
import 'antd/lib/button/style/css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Button size="large" type="danger">Fire Me</Button>
        </div>
      </Provider>
    );
  }
}

export default App;
