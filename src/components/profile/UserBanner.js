import React from "react";
import Icon from "../Icon";
import MessagesList from "../MessagesList";
import UsersList from "../UsersList";
import Popup from "reactjs-popup";
import EditProfile from "../profile/EditProfile";
import { getUser, getUserMessages } from "../../data/data";
import moment from "moment";
import dateFormat from "dateformat";

class UserBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProfileVue: false,
    };
  }

  render() {
    const style = {
      width: "600px",
      // height: "800px",
    };

    const messages = getUserMessages(this.props.user.id);

    let followers = [];
    for (let id of this.props.user.followers) followers.push(getUser(id));

    let following = [];
    for (let id of this.props.user.following) following.push(getUser(id));

    let joinedDate = moment(this.props.user.joinedDate, "DD/MM/YYYY").toDate();
    joinedDate = dateFormat(joinedDate, "mmm dd,yyyy");

    let birthday = moment(this.props.user.birthday, "DD/MM/YYYY").toDate();
    birthday = dateFormat(birthday, "mmm dd,yyyy");

    return (
      <div className="user-banner-container">
        <UserHeader user={this.props.user} />

        <Popup
          trigger={
            <div className="btn user-banner-edit-profile">Edit profile</div>
          }
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
              close={close}
            />
          )}
        </Popup>

        <span className="user-bio break">{this.props.user.bio}</span>

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
