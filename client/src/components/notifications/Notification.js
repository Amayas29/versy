import axios from "axios";
import React from "react";
import MessageViewContainer from "../containers/MessageViewContainer";
import ProfileContainer from "../containers/ProfileContainer";
import Icon from "../Icon";

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      sender: null,
    };
  }

  refresh(notif) {
    if (notif.message) {
      axios
        .get(`http://localhost:4000/api/messages/${notif.message}`)
        .then((res) => {
          this.setState({ message: res.data.msg });
        })
        .catch((err) => {
          console.dir(err);
        });
    }

    if (notif.sender_id) {
      axios
        .get(`http://localhost:4000/api/users/${notif.sender_id}`)
        .then((res) => {
          this.setState({ sender: res.data.user });
        })
        .catch((err) => {
          console.dir(err);
        });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const notif = nextProps.notification;
    this.refresh(notif);
  }

  UNSAFE_componentWillMount() {
    this.refresh(this.props.notification);
  }

  render() {
    if (!this.state.sender) return <></>;

    if (this.props.notification.type !== "follow" && !this.state.message)
      return <></>;

    const props = this.props;
    let name = "";
    let text = "";
    let container = null;

    switch (props.notification.type) {
      case "like":
        name = "fa-heart";
        text = "liked your message";
        container = (
          <MessageViewContainer
            message={this.state.message}
            setMainContainer={props.setMainContainer}
            setPage={props.setPage}
          />
        );
        break;
      case "follow":
        name = "fa-user";
        text = "followed you";
        container = (
          <ProfileContainer
            user={this.state.sender}
            setMainContainer={props.setMainContainer}
            setPage={props.setPage}
          />
        );
        break;

      case "comment":
        name = "fa-comment";
        text = "commented on your message";
        container = (
          <MessageViewContainer
            message={this.state.message}
            setMainContainer={props.setMainContainer}
            setPage={props.setPage}
          />
        );
        break;

      default:
        break;
    }

    return (
      <div
        className="notification-container"
        onClick={() => {
          props.setMainContainer(container);
        }}
      >
        <div className="notification-header">
          <Icon name={name} size="fa-2xl" />
        </div>

        <div className="notification-body">
          <img
            src={this.state.sender.avatar}
            alt="avatar"
            className="notification-avatar"
          />

          <div className="notification-content">
            <span className="notification-user">{this.state.sender.name}</span>{" "}
            {text}
          </div>
        </div>
      </div>
    );
  }
}
export default Notification;
