import React, { Component } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import ResetPassword from "./pages/ResetPassword";
class App extends Component {
  constructor(props) {
    super(props);
    this.setPage.bind(this);

    this.state = {
      page: null,
    };
  }

  componentDidMount() {
    this.setPage(<Home setPage={this.setPage} />);
    // this.setPage(<Profile setPage={this.setPage} />);
    // this.setPage(<Notifications setPage={this.setPage} />);
  }

  setPage(page) {
    this.setState({ page: page });
  }

  render() {
    return this.state.page;
  }
}

export default App;
