import React from "react";

class AuthentificationLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      container: null,
    };

    this.setContainer = this.setContainer.bind(this);
  }

  setContainer(container) {
    this.setState({ container: container });
  }

  render() {
    return <div className="auth-container"> {this.state.container}</div>;
  }
}

export default AuthentificationLayout;
