import React from "react";
import Message from "../message/Message";
import avatar from "../../assets/images/avatar.jpg";
import MessagesList from "../MessagesList";
import PublishMessage from "../message/PublishMessage";

const user = {
  id: 1,
  avatar: avatar,
  name: "Amayas",
  username: "@sadi",
  bio: "Hey bro",
  birthday: new Date(2001, 4, 29),
  location: "Paris, France",
  joinedDate: new Date(2019, 6, 1),
};

const msg = {
  content: "Hello world Hey",
  image: "",
  user: user,
  publishDate: new Date(),
  likes: [],
  comments: [],
  shares: [],
};

const messages = [msg, msg];

class MessageViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message,
      comments: messages,
    };

    this.publish = this.publish.bind(this);
  }

  publish(message) {
    this.setState({
      comments: [message, ...this.state.comments],
    });
  }

  render() {
    return (
      <div className="central-container message-view-container">
        <Message data={this.state.message} />
        <PublishMessage user={user} publish={this.publish} />
        <MessagesList
          messages={this.state.comments}
          setMainContainer={this.props.setMainContainer}
        />
      </div>
    );
  }
}

export default MessageViewContainer;
