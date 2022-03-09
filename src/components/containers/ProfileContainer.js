import React from "react";
import Message from "../message/Message";
import UserBanner from "../banner/UserBanner";
import avatar from "../../assets/images/avatar.jpg";

const messages = [
  {
    content: "Hello world",
    user: {
      name: "John Doe",
      username: "@johndoe",
      avatar: avatar,
    },
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },
  {
    content:
      "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. React est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle MVC. Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité2.",
    user: {
      name: "John Doe",
      username: "@johndoe",
      avatar: avatar,
    },
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
    const user = {
      avatar: avatar,
      name: "John Doe",
      username: "@johndoe",
      bio: "He",
    };
    return (
      <section className="central-container">
        <UserBanner user={user} />
        <ul className="message-list">
          {messages.map((message, index) => (
            <Message
              key={index}
              user={message.user}
              content={message.content}
              publishDate={message.publishDate}
              likes={message.likes}
              comments={message.comments}
              shares={message.shares}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default ProfileContainer;
