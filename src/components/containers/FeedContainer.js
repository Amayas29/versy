import React from "react";
import PublishMessage from "../message/PublishMessage";
import MessagesList from "../MessagesList";
import { getUser, getUserMessages, getRandomMessages } from "../../data/data";

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log("FeedContainer.constructor");

    const token = "0";
    this.state = {
      token: token,
      messages: token ? getUserMessages(token) : getRandomMessages(),
    };

    this.publish = this.publish.bind(this);
  }

  render() {
    const user = this.state.token ? getUser(this.state.token) : null;

    return (
      <section className="central-container">
        {this.state.token && (
          <PublishMessage
            user={user}
            setMainContainer={this.props.setMainContainer}
            publish={this.publish}
          />
        )}

        <MessagesList
          messages={this.state.messages}
          setMainContainer={this.props.setMainContainer}
        />
      </section>
    );
  }

  publish(message) {
    // push to server
    this.setState({
      messages: [message, ...this.state.messages],
    });
  }
}

export default FeedContainer;
