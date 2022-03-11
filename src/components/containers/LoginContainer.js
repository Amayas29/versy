import React from "react";
import Logo from "../Logo";
import Icon from "../Icon";

const LoginContainer = () => {
  return (
    <div className="login-container">
      <Logo />
      <div className="login-form">
        <Input icon="fa-user" type="text" placeholder="Username" />
        <Input icon="fa-key" type="password" placeholder="Password" />
        <Link text="Forgot password ?" />
        <div className="btn">Login</div>
        <Link
          placeholder="Don't have an account ?"
          text="sign up"
          className="signup"
        />
      </div>
    </div>
  );
};

const Input = (props) => {
  return (
    <div className="input">
      <Icon name={props.icon} size="fa-xl" />
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

const Link = (props) => {
  return (
    <div className="link">
      {props.placeholder}
      <span className={props.className}>{props.text}</span>
    </div>
  );
};

export default LoginContainer;
