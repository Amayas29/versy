import React from "react";
import Search from "../Search";
import SuggestionPanel from "../suggestion/SuggestionPanel";
import Footer from "../footer/Footer";
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
        {this.state.token ? <SuggestionPanel /> : <div></div>}
        <Footer />
      </section>
    );
  }
}

export default SuggestContainer;
