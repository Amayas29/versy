import React from "react";
import MenuContainer from "../components/containers/MenuContainer";
import MainContainer from "../components/containers/MainContainer";

const Home = (props) => {
  return (
    <div className="app">
      <MenuContainer setPage={props.setPage} token={props.token} />
      <MainContainer token={props.token} />
    </div>
  );
};

export default Home;
