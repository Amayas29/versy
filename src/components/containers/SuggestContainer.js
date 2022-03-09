import React from "react";
import Search from "../Search";
import SuggestionPanel from "../suggestion/SuggestionPanel";

class SuggestContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "a",
    };
  }

  render() {
    return (
      <section className="suggest">
        <Search />
        {this.state.token && <SuggestionPanel />}
      </section>
    );
  }
}

export default SuggestContainer;
