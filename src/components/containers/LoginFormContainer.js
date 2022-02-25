import React from "react";
import Input from "../Input";

const LoginFormContainer = () => {
  return (
    <form className="login-form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFormContainer;
