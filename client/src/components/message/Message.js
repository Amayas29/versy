import React from "react";
import MessageAvatar from "./MessageAvatar";
import MessageContent from "./MessageContent";
import MessageActions from "./MessageActions";
import MessageHeader from "./MessageHeader";
import MessageAction from "./MessageAction";
import MessageViewContainer from "../containers/MessageViewContainer";
import Popup from "reactjs-popup";
import MessageLikes from "./MessageLikes";
import Icon from "../Icon";
import AuthentificationLayout from "../../layouts/AuthentificationLayout";
import axios from "axios";
import Cookies from "js-cookie";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message,
      user: null,
      sender: null,
    };

    this.toggleLike = this.toggleLike.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  UNSAFE_componentWillMount() {
    const token = Cookies.get("access_token");

    if (!token) return;

    axios.get(`http://localhost:4000/api/token/${token}`).then((res) => {
      this.setState({ user: res.data.user });
    });

    if (!this.props.message) return;

    axios
      .get(`http://localhost:4000/api/users/${this.props.message.user}`)
      .then((res) => {
        this.setState({ sender: res.data.user });
      });

    this.refresh();
  }

  refresh() {
    axios
      .get(`http://localhost:4000/api/messages/${this.state.message._id}`)
      .then((res) => {
        this.setState({ message: res.data.msg });
      });
  }

  toggleLike(isLiked, messageId) {
    if (isLiked) {
      axios
        .put(`http://localhost:4000/api/messages/unlike/${messageId}`)
        .then((_res) => {
          this.refresh();
        });

      if (this.state.user._id === this.state.sender._id) return;

      axios
        .post("http://localhost:4000/api/notifications/search", {
          notification: {
            type: "like",
            message: this.state.message._id,
            user_id: this.state.sender._id,
            sender_id: this.state.user._id,
          },
        })
        .then((res) => {
          if (!res.data.id) return;

          axios.delete(
            `http://localhost:4000/api/notifications/${res.data.id}`
          );
        });

      return;
    }

    axios
      .put(`http://localhost:4000/api/messages/like/${messageId}`)
      .then((_res) => {
        this.refresh();
      });

    if (this.state.user._id === this.state.sender._id) return;

    axios.post(
      `http://localhost:4000/api/notifications/${this.state.sender._id}`,
      {
        notification: {
          type: "like",
          message: this.state.message._id,
        },
      }
    );
  }

  render() {
    if (!this.state.message) return <></>;

    let message = this.state.message;
    let likes = message.likes;
    const user = this.state.user;

    const isLiked = user ? likes.find((u) => u === user._id) : false;
    const token = Cookies.get("access_token");

    const style = {
      width: "700px",
      height: "600px",
      overflowY: "scroll",
      borderRadius: "30px",
      border: "1px solid #f3f4f6",
      backgroundColor: "#111827",
    };

    if (!this.state.sender) return <></>;

    return (
      <article className="message">
        <MessageAvatar
          user={this.state.sender}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
        <MessageHeader
          message={message}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
          refresh={this.props.refresh}
          options={this.props.options}
        />
        <MessageContent message={message} />
        <MessageActions>
          {message.isComment || (
            <MessageAction
              name="fa-comment"
              list={message.comments}
              onClick={() => {
                this.props.setMainContainer(
                  <MessageViewContainer
                    message={message}
                    setMainContainer={this.props.setMainContainer}
                    setPage={this.props.setPage}
                  />
                );
              }}
            />
          )}

          <span className="message-action">
            <Icon
              name="fa-heart"
              size="fa-xl"
              effect={isLiked && "liked"}
              onClick={() => {
                if (token) {
                  this.toggleLike(isLiked, message._id);
                  return;
                }

                this.props.setPage(
                  <AuthentificationLayout setPage={this.props.setPage} />
                );
              }}
            />

            <Popup
              trigger={
                <span className="message-action-text">{likes.length}</span>
              }
              contentStyle={style}
              modal
              closeOnDocumentClick
              closeOnEscape
              lockScroll={true}
            >
              {(close) => (
                <MessageLikes
                  id={message._id}
                  setMainContainer={this.props.setMainContainer}
                  setPage={this.props.setPage}
                  close={close}
                />
              )}
            </Popup>
          </span>
        </MessageActions>
      </article>
    );
  }
}

export default Message;
