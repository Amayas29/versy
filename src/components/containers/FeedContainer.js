import React from "react";
import PublishMessage from "../message/PublishMessage";
import MessagesList from "../MessagesList";
import { getUser, getUserMessages } from "../../data/data";

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    const token = "0";
    this.state = {
      token: token,
      user: getUser(token),
      messages: getUserMessages(token),
    };

    this.publish = this.publish.bind(this);
  }

  render() {
    return (
      <section className="central-container">
        {this.state.token && (
          <PublishMessage
            user={this.state.user}
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
