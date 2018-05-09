import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../store/actions";
import { Link } from "react-router-dom";

import { Form, Icon, Input, Button, Checkbox } from "antd";

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
    const formItemLayout = {
      labelCol: { xs: { span: 24 }, sm: { span: 6 } },
      wrapperCol: { xs: { span: 24 }, sm: { span: 10 } }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 6
        }
      }
    };
    return (
      <Form className="log_in login-form" onSubmit={this.handleSubmit}>
        <h1 className="text-center signup-heading">Placement Cell Log-In</h1>
        <FormItem {...formItemLayout} label="Student ID">
          {getFieldDecorator("sid", {
            rules: [{ required: true, message: "Enter student ID!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="StudentID"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
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
            className="login-form-button"
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
