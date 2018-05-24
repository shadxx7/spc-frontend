import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getUserList } from "../../store/actions";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "name"
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "name"
  },
  {
    title: "Student ID",
    dataIndex: "sid",
    key: "sid"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Link to={`/admin/${record.sid}`}>View</Link>
      </span>
    )
  }
];

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     batch: "2016"
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park"
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park"
//   }
// ];

class UserList extends Component {
  componentDidMount() {
    this.props.getUserList(this.props.admin.token);
  }

  render() {
    const data = this.props.admin.list;
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(mapStateToProps, { getUserList })(UserList);
