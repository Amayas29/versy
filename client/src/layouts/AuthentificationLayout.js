import React from "react";
import LoginContainer from "../components/containers/LoginContainer";
import Logo from "../components/Logo";

class AuthentificationLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: null,
      hasLogo: false,
    };

    this.setContainer = this.setContainer.bind(this);
    this.setHasLogo = this.setHasLogo.bind(this);
  }

  componentDidMount() {
    this.setContainer(
      <LoginContainer
        setContainer={this.setContainer}
        setPage={this.props.setPage}
        setHasLogo={this.setHasLogo}
      />
    );
  }

  setContainer(container) {
    this.setState({
      container: container,
    });
  }

  setHasLogo(hasLogo) {
    this.setState({
      hasLogo: hasLogo,
    });
  }

  render() {
    return (
      <div className="auth">
        <div className="auth-container">
          {this.state.hasLogo && <Logo />}
          {this.state.container}
        </div>
      </div>
    );
  }
}

export default AuthentificationLayout;
