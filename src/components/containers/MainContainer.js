import React from "react";
import FeedContainer from "./FeedContainer";
import SugestContainer from "./SugestContainer";
import logo from "../../assets/logo.png";

const MainContainer = () => {
  return (
    <main className="main">
      <FeedContainer
        user={{ avatar: logo }}
        messages={[
          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(),
          },
          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(2001, 9),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(2021, 0),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(2022, 1),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(2021, 0),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(2022, 1),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(2021, 0),
          },

          {
            content: "Hello",
            avatar: logo,
            name: "John",
            username: "@john",
            time: new Date(2022, 1),
          },
        ]}
      />
      <SugestContainer />
    </main>
  );
};

export default MainContainer;
