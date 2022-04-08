import React from "react";
import Message from "../message/Message";
import MessagesList from "../MessagesList";
import PublishMessage from "../message/PublishMessage";
import { getUser } from "../../data/data";
import getCookie from "../../utils/Cookies";

class MessageViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };

    this.publish = this.publish.bind(this);
  }

  publish(message) {
    this.setState({
      comments: [message, ...this.state.comments],
    });

    this.props.message.comments.push(message);
    // Todo push to server
  }

  render() {
    const token = getCookie("token");
    const user = getUser(token);

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
