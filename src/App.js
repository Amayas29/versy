import React, { Component } from "react";
import AuthentificationLayout from "./layouts/AuthentificationLayout";
import MainLayout from "./layouts/MainLayout";

class App extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);

    this.state = {
      page: null,
    };
  }

  componentDidMount() {
    this.setPage(<MainLayout setPage={this.setPage} />);
    this.setPage(<AuthentificationLayout setPage={this.setPage} />);
  }

  setPage(page) {
    this.setState({ page: page });
  }

  render() {
    return this.state.page;
  }
}

export default App;
