import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Alert, message } from "antd";

//Action Creators
import { logIn } from "../../store/actions";

//Form Layout
import { formItemLayout, tailFormItemLayout } from "../form_layout";

//CSS
import "../../style/login.css";

const FormItem = Form.Item;

class LogIn extends Component {
  componentWillReceiveProps(nextProps) {
    const admin = nextProps.login.admin;
    const tempMessage = nextProps.login.message;
    if (tempMessage === "Successful Authentication") {
      if (admin) {
        message.success("Successful Admin Log in");
        this.props.history.push("/admin/users");
      } else {
        message.success("Successful Log in");
        this.props.history.push("/user");
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.logIn(values);
      }
    });
  };

  showError() {
    if (
      this.props.login.message &&
      this.props.login.message !== "Successful Authentication"
    ) {
      return (
        <Alert
          className="alert-login"
          message={this.props.login.message}
          type="error"
          showIcon
        />
      );
    } else {
      return;
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="form-wrapper" onSubmit={this.handleSubmit}>
        <h1 className="heading">Log in</h1>
        <FormItem {...formItemLayout} label="Student ID">
          {getFieldDecorator("sid", {
            rules: [{ required: true, message: "Enter student ID!" }]
          })(
            <Input
              prefix={<Icon type="user" className="input-icon-style" />}
              placeholder="StudentID"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" className="input-icon-style" />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {this.showError()}
          <Link to="/forgot_password">
            <a className="login-form-forgot">Forgot password</a>
          </Link>
          <br />
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            loading={this.props.login.loading}
          >
            Log in
          </Button>
          <br />
          Or <a href="http://localhost:3000/signup">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const LogInForm = Form.create()(LogIn);

function mapStateToProps(state) {
  return { login: state.login };
}

export default connect(mapStateToProps, { logIn })(LogInForm);
