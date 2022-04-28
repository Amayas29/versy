import React from "react";
import Search from "../search/Search";
import SuggestionPanel from "../suggestion/SuggestionPanel";
import Footer from "../footer/Footer";

class SuggestContainer extends React.Component {
  render() {
    const token = localStorage.getItem("token");

    return (
      <section className="suggest">
        <Search
          setMainContainer={this.props.setMainContainer}
          setPage={this.props.setPage}
        />
        {token ? (
          <SuggestionPanel
            setMainContainer={this.props.setMainContainer}
            setPage={this.props.setPage}
          />
        ) : (
          <div></div>
        )}
        <Footer />
      </section>
    );
  }
}

export default SuggestContainer;
