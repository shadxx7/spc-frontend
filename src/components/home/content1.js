import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "antd";

export default class Content1 extends Component {
  render() {
    return (
      <div className="content1-container">
        <h1 className="display-4 text-white">Placement Cell DAIICT</h1>
        <p className="lead">
          The Placement Cell at DA-IICT is a concept in its own form. It has the
          following structure comprising of three important parts viz. the
          placement office comprising of the Manager (Placements) and placement
          secretary, the faculty members and finally the student representatives
          from each stream. The structure aims at touching all the aspects
          required for the smooth functioning of placement process.
        </p>
        <Button
          type="primary"
          size="large"
          className="signin-button"
          href="/signin"
        >
          <Icon type="login" />
          Sign in
        </Button>
        <Link to="/signup">or Sign up</Link>
      </div>
    );
  }
}
