import React from "react";
import Icon from "../Icon";
import Popup from "reactjs-popup";
import EditProfile from "../profile/EditProfile";
import dateFormat from "dateformat";
import AuthentificationLayout from "../../layouts/AuthentificationLayout";
import axios from "axios";
import Cookies from "js-cookie";
import FollowList from "./FollowList";
import moment from "moment";

class UserBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      sender: null,
    };
  }

  UNSAFE_componentWillMount() {
    const token = Cookies.get("access_token");

    if (!token) return;

    axios.get(`http://localhost:4000/api/token/${token}`).then((res) => {
      this.setState({ sender: res.data.user });
    });
  }

  render() {
    if (!this.state.user) return <></>;

    const token = Cookies.get("access_token");

    const style = {
      width: "600px",
    };

    let joinedDate = this.state.user.joinedDate;
    joinedDate = moment(joinedDate, "DD/MM/YYYY").toDate();
    joinedDate = dateFormat(joinedDate, "mmm dd, yyyy");

    let birthday = this.state.user.birthday;
    birthday = moment(birthday, "DD/MM/YYYY").toDate();
    birthday = dateFormat(birthday, "mmm dd, yyyy");

    const sender = this.state.sender;
    const isFollowing = sender
      ? sender.following.includes(this.state.user._id)
      : false;

    return (
      <div className="user-banner-container">
        <UserHeader user={this.state.user} />

        {sender && sender._id === this.state.user._id ? (
          <Popup
            trigger={<div className="btn user-banner-btn">Edit profile</div>}
            contentStyle={style}
            modal
            closeOnDocumentClick
            closeOnEscape
            lockScroll={true}
          >
            {(close) => (
              <EditProfile
                user={this.state.user}
                setMainContainer={this.props.setMainContainer}
                setPage={this.props.setPage}
                close={close}
              />
            )}
          </Popup>
        ) : (
          <div
            className="btn user-banner-btn"
            onClick={() => {
              if (token) {
                if (isFollowing) {
                  axios
                    .patch(
                      `http://localhost:4000/api/users/unfollow/${this.state.user._id}`
                    )
                    .then((res) => {
                      this.setState({ user: null, sender: null });
                      this.setState({
                        sender: res.data.sender,
                        user: res.data.user,
                      });
                    });

                  axios
                    .post("http://localhost:4000/api/notifications/search", {
                      notification: {
                        type: "follow",
                        message: "",
                        user_id: this.state.user._id,
                        sender_id: this.state.sender._id,
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
                  .patch(
                    `http://localhost:4000/api/users/follow/${this.state.user._id}`
                  )
                  .then((res) => {
                    this.setState({ user: null, sender: null });

                    this.setState({
                      sender: res.data.sender,
                      user: res.data.user,
                    });
                  });

                axios.post(
                  `http://localhost:4000/api/notifications/${this.state.user._id}`,
                  {
                    notification: {
                      message: "",
                      type: "follow",
                      user_id: this.state.user._id,
                      sender_id: this.state.sender._id,
                    },
                  }
                );

                return;
              }

              this.props.setPage(
                <AuthentificationLayout setPage={this.props.setPage} />
              );
            }}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </div>
        )}

        <span className="user-bio break">
          {this.state.user && this.state.user.bio}
        </span>

        <div className="user-metadatas">
          <UserMetadata name="fa-cake-candles" data={`Born ${birthday}`} />
          <UserMetadata name="fa-calendar-days" data={`Joined ${joinedDate}`} />
        </div>

        <div className="user-stats">
          <Popup
            trigger={
              <div className="user-stat">
                <span>{this.state.user.following.length}</span>
                <span>Following</span>
              </div>
            }
            contentStyle={style}
            modal
            closeOnDocumentClick
            closeOnEscape
            lockScroll={true}
          >
            {(close) => (
              <FollowList
                list={this.state.user.following}
                name="following"
                id={this.state.user._id}
                setMainContainer={this.props.setMainContainer}
                setPage={this.props.setPage}
                close={close}
              />
            )}
          </Popup>

          <Popup
            trigger={
              <div className="user-stat">
                <span>{this.state.user.followers.length}</span>
                <span>Followers</span>
              </div>
            }
            contentStyle={style}
            modal
            closeOnDocumentClick
            closeOnEscape
            lockScroll={true}
          >
            {(close) => (
              <FollowList
                list={this.state.user.followers}
                name="followers"
                id={this.state.user._id}
                setMainContainer={this.props.setMainContainer}
                setPage={this.props.setPage}
                close={close}
              />
            )}
          </Popup>
        </div>
      </div>
    );
  }
}

const UserHeader = (props) => {
  return (
    <div className="user-header">
      <img src={props.user.avatar} alt="avatar" className="user-avatar" />

      <div className="user-pseudos">
        <span>{props.user.name}</span>
        <span>{props.user.username}</span>
      </div>
    </div>
  );
};

const UserMetadata = (props) => {
  return (
    <div className="user-metadata">
      <Icon name={props.name} size="fa-lg" />
      <span>{props.data}</span>
    </div>
  );
};

export default UserBanner;
