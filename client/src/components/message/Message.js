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
class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      refresh: false,
    };

    this.toggleLike = this.toggleLike.bind(this);
  }

  UNSAFE_componentWillMount() {
    const token = localStorage.getItem("token");
    axios.get(`http://localhost:4000/api/token/${token}`).then((res) => {
      const user_id = res.user_id;
      axios.get(`http://localhost:4000/api/users/${user_id}`).then((user) => {
        this.setState({ user: user.user });
      });
    });
  }

  toggleLike(user, message) {
    // Todo
    this.setState({ refresh: !this.state.refresh });
  }

  render() {
    let likes = this.props.data.likes;
    const user = this.state.user;
    const isLiked = user ? likes.find((u) => u === user.id) : false;
    const token = localStorage.getItem("token");

    const style = {
      width: "700px",
      height: "600px",
      overflowY: "scroll",
      borderRadius: "30px",
      border: "1px solid #f3f4f6",
      backgroundColor: "#111827",
    };

    return (
      <article className="message">
        <MessageAvatar
          user={this.props.data.user}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
        <MessageHeader
          message={this.props.data}
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
        <MessageContent message={this.props.data} />
        <MessageActions>
          {this.props.data.isComment || (
            <MessageAction
              name="fa-comment"
              list={this.props.data.comments}
              onClick={() => {
                this.props.setMainContainer(
                  <MessageViewContainer
                    message={this.props.data}
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
                  this.toggleLike(user, this.props.data);
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
                  likes={likes}
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
