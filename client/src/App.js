import React, { Component } from "react";
import MainLayout from "./layouts/MainLayout";
class App extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);

    this.state = {
      page: null,
    };

    localStorage.setItem("token", "1hjv356Dghyc");
  }

  componentDidMount() {
    this.setPage(<MainLayout setPage={this.setPage} />);
  }

  setPage(page) {
    this.setState({ page: page });
  }

  render() {
    return this.state.page;
  }
}

export default App;
