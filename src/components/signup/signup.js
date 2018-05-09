import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions";

import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class SignUp extends Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const tempValue = {
          sid: values.sid,
          email: values.email,
          password: values.password
        };
        this.props.signUp(tempValue);
        this.props.form.resetFields();
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("The 2 passwords that you have entered are inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  notWebmail = (rule, value, callback) => {
    const form = this.props.form;
    const check = "daiict.ac.in";
    if (value && value.includes(check)) {
      callback(
        "Please enter an alternate Email ID which is not your Webmail ID."
      );
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      }
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
      <Form onSubmit={this.handleSubmit}>
        <h1 className="text-center signup-heading">Placement Cell Sign-Up</h1>
        <FormItem {...formItemLayout} label="Student ID">
          {getFieldDecorator("sid", {
            rules: [
              {
                required: true,
                message: "Please enter a Student ID!"
              }
            ]
          })(<Input type="number" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "Please enter a valid Email ID!"
              },
              {
                required: true,
                message: "Please enter a Email ID!"
              },
              {
                validator: this.notWebmail
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Confirm Password">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <p>{this.props.signup.message}</p>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const SignUpForm = Form.create()(SignUp);

function mapStateToProps(state) {
  return { signup: state.signup };
}

export default connect(mapStateToProps, { signUp })(SignUpForm);
