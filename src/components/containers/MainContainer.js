import React from "react";
import SuggestContainer from "./SuggestContainer";

const MainContainer = (props) => {
  return (
    <main className="main">
      {props.children}
      <SuggestContainer token={props.token} />
    </main>
  );
};

export default MainContainer;
