import React from "react";
import MenuContainer from "../components/containers/MenuContainer";
import MainContainer from "../components/containers/MainContainer";
import ProfileContainer from "../components/containers/ProfileContainer";
import logo from "../assets/images/avatar.jpg";

const Profile = (props) => {
  return (
    <div className="app">
      <MenuContainer setPage={props.setPage} token={props.token} />
      <MainContainer token={props.token}>
        <ProfileContainer
          token={props.token}
          user={{
            avatar: logo,
            name: "Amayas",
            username: "@amayas29",
            bio: "Hey",
          }}
          messages={
            [
              // {
              //   content:
              //     "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. React est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle MVC. Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité2.",
              //   avatar: logo,
              //   name: "Amayas",
              //   username: "@amayas29",
              //   time: new Date(2021, 1),
              //   likes: [],
              //   comments: [],
              //   shares: [],
              // },
              // {
              //   content:
              //     "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. React est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle MVC. Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité2.",
              //   avatar: logo,
              //   name: "Amayas",
              //   username: "@amayas29",
              //   time: new Date(2021, 1),
              //   likes: [],
              //   comments: [],
              //   shares: [],
              // },
            ]
          }
        />
      </MainContainer>
    </div>
  );
};

export default Profile;
