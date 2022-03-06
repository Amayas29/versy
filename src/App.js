import React, { Component } from "react";
import Home from "./pages/Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.setPage.bind(this);

    this.state = {
      token: "s",
      page: null,
    };
  }

  componentDidMount() {
    this.setPage(<Home setPage={this.setPage} token={this.state.token} />);
  }

  setPage(page) {
    this.setState({ page: page });
  }

  render() {
    return this.state.page;
  }
}

export default App;
