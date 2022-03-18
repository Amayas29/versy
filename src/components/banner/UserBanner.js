import React from "react";
import Icon from "../Icon";
import dateFormat from "dateformat";
import versy from "../../assets/images/versy.png";

const user = {
  id: 2,
  avatar: versy,
  name: "Hamid",
  username: "@kolli",
  bio: "Djaffer",
  birthday: new Date(2001, 4, 29),
  location: "Paris, France",
  joinedDate: new Date(2019, 6, 1),
};

const followers = [
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
  user,
];
const following = [user, user, user, user, user, user, user];

const UserBanner = (props) => {
  return (
    <div className="user-banner-container">
      <UserHeader user={props.user} />
      <div className="btn user-banner-edit-profile">Edit profile</div>

      <span className="user-bio">{props.user.bio}</span>

      <div className="user-metadatas">
        <UserMetadata name="fa-location-dot" data={props.user.location} />
        <UserMetadata
          name="fa-cake-candles"
          data={"Born " + dateFormat(props.user.birthday, "mmm d, yyyy")}
        />
        <UserMetadata
          name="fa-calendar-days"
          data={"Joined " + dateFormat(props.user.joinedDate, "mmm d, yyyy")}
        />
      </div>

      <div className="user-stats">
        <UserStat list={followers} name="Following" />
        <UserStat list={following} name="Followers" />
      </div>
    </div>
  );
};

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
    <div
      className="user-stat"
      onClick={() => {
        return;
      }}
    >
      <span>{props.list.length}</span>
      <span>{props.name}</span>
    </div>
  );
};

export default UserBanner;
