import React from "react";
import SuggestContainer from "./SuggestContainer";

const MainContainer = (props) => {
  return (
    <main className="main">
      {props.children}
      <SuggestContainer setMainContainer={props.setMainContainer} />
    </main>
  );
};

export default MainContainer;
