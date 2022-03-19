import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageContent from "./MessageContent";
import MessageActions from "./MessageActions";
import MessageHeader from "./MessageHeader";
import MessageAction from "./MessageAction";

class Message extends React.Component {
  render() {
    return (
      <article className="message">
        <MessageAvatar
          user={this.props.data.user}
          setMainContainer={this.props.setMainContainer}
        />
        <MessageHeader
          message={this.props.data}
          setMainContainer={this.props.setMainContainer}
        />
        <MessageContent message={this.props.data} />
        <MessageActions>
          <MessageAction name="fa-comment" list={this.props.data.comments} />
          <MessageAction name="fa-heart" list={this.props.data.likes} />
          <MessageAction name="fa-share" list={this.props.data.shares} />
        </MessageActions>
      </article>
    );
  }
}

export default Message;
