import React from "react";
import PublishMessage from "../message/PublishMessage";
import MessagesList from "../MessagesList";
import axios from "axios";

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      messages: null,
    };

    this.publish = this.publish.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.token = localStorage.getItem("token");

    axios
      .get(`http://localhost:4000/api/token/${this.token}`)
      .then((token_res) => {
        const user_id = token_res.user_id;

        axios
          .get(`http://localhost:4000/api/users/${user_id}`)
          .then((user_res) => {
            this.setState({ user: user_res.user });

            axios
              .get(`http://localhost:4000/api/messages/${user_id}`)
              .then((messages_res) => {
                this.setState({ messages: messages_res.messages });
              });
          });
      })
      .catch(() => {
        axios.get(`http://localhost:4000/api/messages`).then((messages_res) => {
          this.setState({ messages: messages_res.messages });
        });
      });
  }

  render() {
    return (
      <section className="central-container">
        {this.state.user && (
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
    // Todo push to serve
    this.setState({ messages: [message, ...this.state.messages] });
  }
}

export default FeedContainer;
