import React from "react";
import Search from "../Search";
import SuggestionPanel from "../suggestion/SuggestionPanel";

const SuggestContainer = () => {
  return (
    <section className="suggest">
      <Search />
      <SuggestionPanel />
    </section>
  );
};

export default SuggestContainer;
