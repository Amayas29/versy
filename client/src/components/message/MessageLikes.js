import axios from "axios";
import React from "react";
import UsersList from "../UsersList";

class MessageLikes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  UNSAFE_componentWillMount() {
    axios
      .get(`http://localhost:4000/api/messages/likes/${this.props.id}`)
      .then((res) => {
        this.setState({ users: res.data.likes });
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    const props = this.props;
    return (
      <div className="message-likes-container">
        <span className="message-likes-container-title">Likes</span>
        <UsersList
          users={this.state.users}
          setMainContainer={(container) => {
            props.close();
            props.setMainContainer(container);
          }}
          hasBio={true}
          setPage={props.setPage}
        />
      </div>
    );
  }
}

export default MessageLikes;
