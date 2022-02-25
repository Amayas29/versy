import React from "react";

import Input from "../Input";

const RegisterFormContainer = () => {
  return (
    <form>
      <Input type="text" placeholder="username" />
      <Input type="mail" placeholder="mail" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="confirm password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterFormContainer;
