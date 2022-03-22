import React from "react";
import Message from "../message/Message";
import MessagesList from "../MessagesList";
import PublishMessage from "../message/PublishMessage";
import { getUser } from "../../data/data";

class MessageViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "0",
      message: this.props.message,
      // Todo
      comments: [],
    };

    this.publish = this.publish.bind(this);
  }

  publish(message) {
    this.setState({
      comments: [message, ...this.state.comments],
    });
  }

  render() {
    const user = getUser(this.state.token);
    return (
      <div className="central-container message-view-container">
        <Message
          data={this.state.message}
          setMainContainer={this.props.setMainContainer}
        />
        <PublishMessage
          user={user}
          publish={this.publish}
          setMainContainer={this.props.setMainContainer}
        />
        <MessagesList
          messages={this.state.comments}
          setMainContainer={this.props.setMainContainer}
        />
      </div>
    );
  }
}

export default MessageViewContainer;
