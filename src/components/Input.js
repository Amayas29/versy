import React from "react";
import Icon from "./Icon";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
    };

    this.tooglePassword = this.tooglePassword.bind(this);
  }

  tooglePassword = () => {
    this.setState({
      type: this.state.type === "password" ? "text" : "password",
    });
  };

  render() {
    return (
      <div className="input-container">
        <div className="input-name">
          <Icon name={this.props.icon} size="fa-xl" />
          <span>{this.props.label}</span>
        </div>
        <input
          className={`${
            this.props.hasShowPassword ? "input-password" : "input"
          }`}
          type={this.state.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.handleChange}
          pattern={this.props.pattern}
        />
        {this.props.hasShowPassword && (
          <ShownPassword
            tooglePassword={this.tooglePassword}
            hide={this.state.type === "password"}
          />
        )}
        <span className="auth-errors">{this.props.error}</span>
      </div>
    );
  }
}

const ShownPassword = (props) => {
  return props.hide ? (
    <Icon name="fa-eye" size="fa-lg" onClick={props.tooglePassword} />
  ) : (
    <Icon name="fa-eye-slash" size="fa-lg" onClick={props.tooglePassword} />
  );
};

export default Input;
