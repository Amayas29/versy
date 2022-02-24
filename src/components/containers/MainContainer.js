import React from "react";
import FeedContainer from "./FeedContainer";
import SugestContainer from "./SugestContainer";

const MainContainer = () => {
  return (
    <main className="main">
      <FeedContainer />
      <SugestContainer />
    </main>
  );
};

export default MainContainer;
