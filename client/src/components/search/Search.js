import React from "react";
import Icon from "../Icon";
import SearchContainer from "../containers/SearchContainer";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };

    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />
        <Icon
          name="fa-magnifying-glass"
          size="fa-lg"
          onClick={() => {
            if (!this.state.content) return;

            this.props.setMainContainer(
              <SearchContainer
                setMainContainer={this.props.setMainContainer}
                setPage={this.props.setPage}
                query={this.state.content}
              />
            );

            this.setState({ content: "" });
          }}
        />
        <Icon
          name="fa-xmark"
          size="fa-lg"
          onClick={() => this.setState({ content: "" })}
        />
      </div>
    );
  }
}

export default Search;
