import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../store/actions";

import { Form, Icon, Input, Button, Checkbox } from "antd";

const FormItem = Form.Item;

class LogIn extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const tempValue = {
          sid: values.sid,
          password: values.password
        };
        this.props.logIn(tempValue);
        this.props.from.resetfields();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { xs: { span: 24 }, sm: { span: 6 } },
      wrapperCol: { xs: { span: 24 }, sm: { span: 10 } }
    };
    return (
      <Form className="log_in login-form" onSubmit={this.handleSubmit}>
        <h1 className="text-center signup-heading">SPC Log-In</h1>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("sid", {
            rules: [{ required: true, message: "Enter student ID!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="StudentID"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout}>
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
        <FormItem {...formItemLayout}>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
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
