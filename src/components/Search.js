import React from "react";
import Icon from "./Icon";

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
          onClick={this.props.search}
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
