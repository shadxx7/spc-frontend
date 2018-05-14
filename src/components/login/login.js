import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";

//Action Creators
import { logIn } from "../../store/actions";

//Form Layout
import { formItemLayout, tailFormItemLayout } from "../form_layout";

const FormItem = Form.Item;

class LogIn extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.logIn(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="wrapper" onSubmit={this.handleSubmit}>
        <h1 className="text-center heading">Placement Cell Log-In</h1>
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
          <p>{this.props.login.message}</p>
          <Link to="/forgot_password">
            <a className="login-form-forgot">Forgot password</a>
          </Link>
          <br />
          <Button
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
