import React from "react";
import MenuContainer from "../components/containers/MenuContainer";
import MainContainer from "../components/containers/MainContainer";

const Home = () => {
  return (
    <div className="app">
      <MenuContainer />
      <MainContainer />
    </div>
  );
};

export default Home;
