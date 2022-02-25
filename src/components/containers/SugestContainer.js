import React from "react";
import Search from "../Search";
import PrivateMessages from "./PrivateMessages";

const SugestContainer = () => {
  return (
    <section className="suggest">
      <Search />
      <PrivateMessages />
    </section>
  );
};

export default SugestContainer;
