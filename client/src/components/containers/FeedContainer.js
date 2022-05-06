import React from "react";
import PublishMessage from "../message/PublishMessage";
import MessagesList from "../MessagesList";
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      messages: null,
    };

    this.publish = this.publish.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  UNSAFE_componentWillMount() {
    const token = Cookies.get("access_token");

    axios
      .get(`http://localhost:4000/api/token/${token}`)
      .then((res) => {
        this.setState({ user: res.data.user });
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    this.refresh();
  }

  refresh() {
    this.setState({ messages: [] });
    const token = Cookies.get("access_token");

    if (token) {
      axios
        .get("http://localhost:4000/api/messages/feed")
        .then((res) => {
          this.setState({ messages: res.data.messages });
        })
        .catch((err) => {
          console.log(err.response.data);
        });

      return;
    }

    axios.get(`http://localhost:4000/api/messages`).then((res) => {
      this.setState({ messages: res.data.messages });
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
          refresh={this.refresh}
        />
      </section>
    );
  }

  publish(message) {
    axios
      .post("http://localhost:4000/api/messages", {
        message: message,
      })
      .then((_res) => {
        this.refresh();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
}

export default FeedContainer;
