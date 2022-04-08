import React from "react";
import PublishMessage from "../message/PublishMessage";
import MessagesList from "../MessagesList";
import {
  getUser,
  getUserMessages,
  getRandomMessages,
  addMessage,
} from "../../data/data";
import getCookie from "../../utils/Cookies";

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    const token = getCookie("token");

    this.state = {
      messages: token ? getUserMessages(token) : getRandomMessages(),
    };

    this.publish = this.publish.bind(this);
  }

  render() {
    const token = getCookie("token");
    const user = getUser(token);

    return (
      <section className="central-container">
        {token && (
          <PublishMessage
            user={user}
            setMainContainer={this.props.setMainContainer}
            setPage={this.props.setPage}
            publish={this.publish}
          />
        )}

        <MessagesList
          messages={this.state.messages}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
      </section>
    );
  }

  publish(message, id) {
    this.setState({ messages: [message, ...this.state.messages] });
    addMessage(message, id);
  }
}

export default FeedContainer;
