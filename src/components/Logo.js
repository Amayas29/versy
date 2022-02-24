import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="Versy Logo" />
      </a>
    </div>
  );
};

export default Logo;
