import React from "react";
import Search from "../search/Search";
import SuggestionPanel from "../suggestion/SuggestionPanel";
import Footer from "../footer/Footer";

class SuggestContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "0",
    };
  }

  render() {
    return (
      <section className="suggest">
        <Search setMainContainer={this.props.setMainContainer} />
        {this.state.token ? (
          <SuggestionPanel setMainContainer={this.props.setMainContainer} />
        ) : (
          <div></div>
        )}
        <Footer />
      </section>
    );
  }
}

export default SuggestContainer;
