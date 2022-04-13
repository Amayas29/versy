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

    this.token = getCookie("token");

    this.state = {
      user: null,
      messages: null,
    };

    this.publish = this.publish.bind(this);
  }

  componentWillMount() {
    const user = getUser(this.token);
    const messages = getUserMessages(user.id);

    this.setState({ user, messages });
  }

  render() {
    return (
      <section className="central-container">
        {this.token && (
          <PublishMessage
            user={this.state.user}
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
