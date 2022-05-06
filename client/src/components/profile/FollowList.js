import axios from "axios";
import React from "react";
import UsersList from "../UsersList";

class FollowList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  UNSAFE_componentWillMount() {
    axios
      .get(`http://localhost:4000/api/users/follows/${this.props.id}`)
      .then((res) => {
        this.setState({ users: res.data[this.props.name] });
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    return (
      <div className="follow-list">
        <UsersList
          users={this.state.users}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
          hasBio={true}
        />
      </div>
    );
  }
}

export default FollowList;
