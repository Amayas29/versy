import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

class App extends Component {
  constructor(props) {
    super(props);
    this.setPage.bind(this);

    this.state = {
      token: "",
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
