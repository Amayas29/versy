import React from "react";
import Search from "../Search";
import SuggestionPanel from "../suggestion/SuggestionPanel";

const SuggestContainer = (props) => {
  return (
    <section className="suggest">
      <Search />
      {props.token && <SuggestionPanel />}
    </section>
  );
};

export default SuggestContainer;
