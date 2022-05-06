import axios from "axios";
import React from "react";
import UsersList from "../UsersList";

class AllSuggestionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  UNSAFE_componentWillMount() {
    axios
      .get("http://localhost:4000/api/users/suggest")
      .then((res) => {
        this.setState({ users: res.data.users });
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    return (
      <div className="central-container">
        <UsersList
          users={this.state.users}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
      </div>
    );
  }
}

export default AllSuggestionContainer;
