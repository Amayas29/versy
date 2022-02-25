import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Home />,
    };
  }

  setPage(page) {
    this.setState({ page });
  }

  render() {
    return this.state.page;
  }
}

export default App;
