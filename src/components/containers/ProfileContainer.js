import React from "react";
import Message from "../message/Message";
import UserBanner from "../banner/UserBanner";
import avatar from "../../assets/images/avatar.jpg";

const user = {
  id: 1,
  avatar: avatar,
  name: "Amayas",
  username: "@sadi",
  bio: "Hey bro",
  birthday: new Date(2001, 4, 29),
  location: "Paris, France",
  joinedDate: new Date(2019, 6, 1),
};

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

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "a",
    };
  }

  render() {
    const c_user = this.props.user ? this.props.user : user;

    return (
      <section className="central-container">
        <UserBanner user={c_user} />
        <ul className="message-list">
          {messages.map((message, index) => (
            <Message
              key={index}
              data={message}
              setMainContainer={() => {
                return;
              }}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default ProfileContainer;
