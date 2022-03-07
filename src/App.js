import React, { Component } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
class App extends Component {
  constructor(props) {
    super(props);
    this.setPage.bind(this);

    this.state = {
      token: "d",
      page: null,
    };
  }

  componentDidMount() {
    // this.setPage(<Home setPage={this.setPage} token={this.state.token} />);
    // this.setPage(<Profile setPage={this.setPage} token={this.state.token} />);
    this.setPage(
      <Notifications setPage={this.setPage} token={this.state.token} />
    );
  }

  setPage(page) {
    this.setState({ page: page });
  }

  render() {
    return this.state.page;
  }
}

export default App;
