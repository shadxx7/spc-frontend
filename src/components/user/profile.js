import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row, List } from "antd";
// import { fetchUserProfile } from "../../store/actions";

const data = [
  {
    title: "Ant Design Title 1"
  }
];

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={20}>
            <p>
              Please enter all your details by clicking 'Edit Profile'. Once all
              details are entered the profile will be approved by the SPC after
              which you will not be able to edit the profile.
            </p>
          </Col>
          <Col>
            <Button type="primary" icon="edit">
              Edit Profile
            </Button>
          </Col>
        </Row>
        <Row>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a>{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Row>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { profile: state.profile };
// }

// export default connect(mapStateToProps, { fetchUserProfile })(UserProfile);

export default UserProfile;
