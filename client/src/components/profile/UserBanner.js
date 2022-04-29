import React from "react";
import Icon from "../Icon";
import MessagesList from "../MessagesList";
import UsersList from "../UsersList";
import Popup from "reactjs-popup";
import EditProfile from "../profile/EditProfile";
import moment from "moment";
import dateFormat from "dateformat";
import AuthentificationLayout from "../../layouts/AuthentificationLayout";
import axios from "axios";

class UserBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      mainProfileVue: false,
    };
  }

  UNSAFE_componentWillMount() {
    const token = localStorage.getItem("token");
    axios.get(`http://localhost:4000/api/token/${token}`).then((res) => {
      const user_id = res.user_id;
      axios
        .get(`http://localhost:4000/api/users/${user_id}`)
        .then((user_res) => {
          this.setState({ user: user_res.user });
        });
    });
  }

  render() {
    // Todo: temporary
    if (!this.props.user) return <></>;

    const token = localStorage.getItem("token");

    const style = {
      width: "600px",
    };

    // TODO: get messages
    const messages = [];

    let followers = this.props.user.followers;
    let following = this.props.user.following;

    let joinedDate = moment(this.props.user.joinedDate, "DD/MM/YYYY").toDate();
    joinedDate = dateFormat(joinedDate, "mmm dd,yyyy");

    let birthday = moment(this.props.user.birthday, "DD/MM/YYYY").toDate();
    birthday = dateFormat(birthday, "mmm dd,yyyy");

    const user = this.state.user;

    return (
      <div className="user-banner-container">
        <UserHeader user={this.props.user} />

        {user && user.id === this.props.user.id ? (
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
                user={this.props.user}
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
                return;
              }

              this.props.setPage(
                <AuthentificationLayout setPage={this.props.setPage} />
              );
            }}
          >
            Follow
          </div>
        )}

        <span className="user-bio break">
          {this.props.user && this.props.user.bio}
        </span>

        <div className="user-metadatas">
          <UserMetadata name="fa-cake-candles" data={`Born ${birthday}`} />
          <UserMetadata name="fa-calendar-days" data={`Joined ${joinedDate}`} />
        </div>

        <div className="user-stats">
          <UserStat
            list={followers}
            name="Following"
            onClick={() =>
              this.props.setProfileVue(
                <UsersList
                  users={followers}
                  setMainContainer={this.props.setMainContainer}
                  setPage={this.props.setPage}
                />,
                false
              )
            }
          />

          <UserStat
            list={following}
            name="Followers"
            onClick={() =>
              this.props.setProfileVue(
                <UsersList
                  users={following}
                  setMainContainer={this.props.setMainContainer}
                  setPage={this.props.setPage}
                />,
                false
              )
            }
          />

          {this.props.mainProfileVue || (
            <Icon
              name="fa-left-long"
              size="fa-lg"
              onClick={() =>
                this.props.setProfileVue(
                  <MessagesList
                    messages={messages}
                    setMainContainer={this.props.setMainContainer}
                    setPage={this.props.setPage}
                  />,
                  true
                )
              }
            />
          )}
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

const UserStat = (props) => {
  return (
    <div className="user-stat" onClick={props.onClick}>
      <span>{props.list.length}</span>
      <span>{props.name}</span>
    </div>
  );
};

export default UserBanner;
