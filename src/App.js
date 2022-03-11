import React, { Component } from "react";
// import MainLayout from "./layouts/MainLayout";
import AuthentificationLayout from "./layouts/AuthentificationLayout";
import LoginContainer from "./components/containers/LoginContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);

    this.state = {
      page: null,
    };
  }

  componentDidMount() {
    // this.setPage(<MainLayout setPage={this.setPage} />);
    this.setPage(
      <AuthentificationLayout
        setPage={this.setPage}
        container={<LoginContainer />}
      />
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
