import React from "react";
import Message from "../message/Message";
import PublishMessage from "../message/PublishMessage";
import logo from "../../assets/logo.png";

const FeedContainer = () => {
  return (
    <section className="feed">
      <PublishMessage avatar={logo} />
      <ul className="message-list">
        <Message
          content="React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état."
          avatar={logo}
          name="Amayas"
          username="@amayas29"
          time="now"
        />

        <Message
          content="React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état."
          avatar={logo}
          name="John"
          username="@john"
          time="2 minutes ago"
        />

        <Message
          content="React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état."
          avatar={logo}
          name="Yass"
          username="@yass"
          time="12 minutes ago"
        />

        <Message
          content="React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état."
          avatar={logo}
          name="Rayane"
          username="@rayane"
          time="1 hour ago"
        />

        <Message
          content="React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état."
          avatar={logo}
          name="Hamid"
          username="@strom"
          time="2 hours ago"
        />

        <Message
          content="React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état."
          avatar={logo}
          name="Amine la blue"
          username="@amineYK"
          time="1 day ago"
        />
      </ul>
    </section>
  );
};

export default FeedContainer;
