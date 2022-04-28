import React from "react";
import Message from "../message/Message";
import MessagesList from "../MessagesList";
import PublishMessage from "../message/PublishMessage";
import axios from "axios";

class MessageViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      comments: [],
    };

    this.publish = this.publish.bind(this);
  }

  UNSAFE_componentWillMount() {
    const token = localStorage.getItem("token");
    axios.get(`http://localhost:4000/api/token/${token}`).then((res) => {
      const user_id = res.user_id;
      axios
        .get(`http://localhost:4000/api/users/${user_id}`)
        .then((user_res) => {
          this.setState({ user: user_res.user });
        });
    });
  }

  publish(message) {
    this.setState({
      comments: [message, ...this.state.comments],
    });

    this.props.message.comments.push(message);
    // Todo push to server
  }

  render() {
    const user = this.state.user;

    return (
      <div className="central-container message-view-container">
        <Message
          data={this.props.message}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
        {user && (
          <PublishMessage
            user={user}
            isComment={true}
            publish={this.publish}
            setMainContainer={this.props.setMainContainer}
            setPage={this.props.setPage}
          />
        )}

        <MessagesList
          messages={this.state.comments}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
      </div>
    );
  }
}

export default MessageViewContainer;
