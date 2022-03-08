import React from "react";
import SuggestContainer from "./SuggestContainer";

const MainContainer = (props) => {
  return (
    <main className="main">
      {props.children}
      <SuggestContainer />
    </main>
  );
};

export default MainContainer;
