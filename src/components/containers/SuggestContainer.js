import React from "react";
import Search from "../Search";
import SuggestionPanel from "../suggestion/SuggestionPanel";
import Footer from "../footer/Footer";
import SearchContainer from "../containers/SearchContainer";

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
        <Search
          search={() => {
            this.props.setMainContainer(<SearchContainer />);
          }}
        />
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
