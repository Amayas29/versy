import React from "react";
import FeedContainer from "./FeedContainer";
import SuggestContainer from "./SuggestContainer";
import logo from "../../assets/avatar.jpg";

const MainContainer = () => {
  return (
    <main className="main">
      <FeedContainer
        user={{ avatar: logo }}
        messages={[
          {
            content: "Hello world",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(),
            likes: [],
            comments: [],
            shares: [],
          },
          {
            content:
              "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. React est une bibliothèque qui ne gère que l'interface de l'application, considéré comme la vue dans le modèle MVC. Elle peut ainsi être utilisée avec une autre bibliothèque ou un framework MVC comme AngularJS. La bibliothèque se démarque de ses concurrents par sa flexibilité et ses performances, en travaillant avec un DOM virtuel et en ne mettant à jour le rendu dans le navigateur qu'en cas de nécessité2.",
            avatar: logo,
            name: "Amayas",
            username: "@amayas29",
            time: new Date(2021, 1),
            likes: [],
            comments: [],
            shares: [],
          },

          {
            content:
              "Un jeton non fongible1,2,3 (JNF1 ou NFT, de l’anglais non-fungible token) est une donnée valorisée composée d'un type de jeton cryptographique qui représente un objet (souvent numérique), auquel est rattachée une identité numérique (reliée à au moins un propriétaire). Cette donnée est stockée et authentifiée grâce à un protocole de chaîne de blocs (blockchain), qui lui accorde par là-même sa première valeur. En d'autres termes, il s'agit d'un acte de propriété consigné dans un registre numérique public et décentralisé.",
            avatar: logo,
            name: "The Nfts",
            username: "@amanft",
            time: new Date(2022, 1),
            likes: [],
            comments: [],
            shares: [],
          },
        ]}
      />
      <SuggestContainer />
    </main>
  );
};

export default MainContainer;
