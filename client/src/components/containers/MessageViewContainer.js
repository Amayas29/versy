import React from "react";
import Message from "../message/Message";
import MessagesList from "../MessagesList";
import PublishMessage from "../message/PublishMessage";
import axios from "axios";
import Cookies from "js-cookie";

class MessageViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message,
      user: null,
      comments: [],
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
    this.setState({ comments: [], message: null });

    axios
      .get(
        `http://localhost:4000/api/messages/comments/${this.props.message._id}`
      )
      .then((res) => {
        axios
          .get(`http://localhost:4000/api/messages/${this.props.message._id}`)
          .then((msg_res) => {
            this.setState({
              comments: res.data.comments,
              message: msg_res.data.msg,
            });
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  publish(message) {
    axios
      .put(
        `http://localhost:4000/api/messages/comment/${this.props.message._id}`,
        {
          comment: message,
        }
      )
      .then((_res) => {
        this.refresh();
      });
  }

  render() {
    if (!this.state.message) return <></>;

    const user = this.state.user;

    return (
      <div className="central-container message-view-container">
        <Message
          message={this.state.message}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
          options={false}
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
          comments={true}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
          refresh={this.refresh}
        />
      </div>
    );
  }
}

export default MessageViewContainer;
