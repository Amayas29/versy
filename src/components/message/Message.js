import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageContent from "./MessageContent";
import MessageActions from "./MessageActions";
import MessageHeader from "./MessageHeader";
import MessageAction from "./MessageAction";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      content: props.content,
      publishDate: props.publishDate,
      comments: props.comments,
      likes: props.likes,
      shares: props.shares,
    };
  }

  render() {
    return (
      <article className="message">
        <MessageAvatar user={this.state.user} />
        <MessageHeader message={this.state} />
        <MessageContent message={this.state} />
        <MessageActions>
          <MessageAction name="fa-comment" list={this.state.comments} />
          <MessageAction name="fa-heart" list={this.state.likes} />
          <MessageAction name="fa-share" list={this.state.shares} />
        </MessageActions>
      </article>
    );
  }
}

export default Message;
