import React from "react";
import Icon from "../Icon";
import dateFormat from "dateformat";
import versy from "../../assets/images/versy.png";
import MessagesList from "../MessagesList";
import UsersList from "../UsersList";
import avatar from "../../assets/images/avatar.jpg";
import Popup from "reactjs-popup";
import EditProfile from "../profile/EditProfile";

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

const followers = [user, user];
const following = [user];

const messages = [
  {
    content: "Hello world Hey",
    image: avatar,
    user: user,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },
  {
    content:
      "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. React est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle MVC. Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité2.",
    image: "",
    user: user,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },
];

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
      height: "700px",
    };

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
        >
          {(close) => (
            <EditProfile
              user={this.props.user}
              setMainContainer={this.props.setMainContainer}
              close={close}
            />
          )}
        </Popup>

        <span className="user-bio">{this.props.user.bio}</span>

        <div className="user-metadatas">
          <UserMetadata
            name="fa-location-dot"
            data={this.props.user.location}
          />
          <UserMetadata
            name="fa-cake-candles"
            data={"Born " + dateFormat(this.props.user.birthday, "mmm d, yyyy")}
          />
          <UserMetadata
            name="fa-calendar-days"
            data={
              "Joined " + dateFormat(this.props.user.joinedDate, "mmm d, yyyy")
            }
          />
        </div>

        <div className="user-stats">
          <UserStat
            list={followers}
            name="Following"
            onClick={() =>
              this.props.setProfileVue(<UsersList users={followers} />, false)
            }
          />

          <UserStat
            list={following}
            name="Followers"
            onClick={() =>
              this.props.setProfileVue(<UsersList users={following} />, false)
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
