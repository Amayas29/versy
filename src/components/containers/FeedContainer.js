import React from "react";
import Message from "../message/Message";
import PublishMessage from "../message/PublishMessage";
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
  {
    content:
      "Un jeton non fongible1,2,3 (JNF1 ou NFT, de l’anglais non-fungible token) est une donnée valorisée composée d'un type de jeton cryptographique qui représente un objet (souvent numérique), auquel est rattachée une identité numérique (reliée à au moins un propriétaire). Cette donnée est stockée et authentifiée grâce à un protocole de chaîne de blocs (blockchain), qui lui accorde par là-même sa première valeur. En d'autres termes, il s'agit d'un acte de propriété consigné dans un registre numérique public et décentralisé.",
    image: "",
    user: user,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },
  {
    content: "",
    image: avatar,
    user: user,
    publishDate: new Date(),
    likes: [],
    comments: [],
    shares: [],
  },
];

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "a",
    };
  }

  render() {
    return (
      <section className="central-container">
        {this.state.token && (
          <PublishMessage
            user={user}
            setMainContainer={this.props.setMainContainer}
          />
        )}

        <ul className="message-list">
          {messages.map((message, index) => (
            <Message
              key={index}
              data={message}
              setMainContainer={this.props.setMainContainer}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default FeedContainer;
