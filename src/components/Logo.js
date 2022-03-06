import React from "react";
import versy from "../assets/images/versy.png";

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={versy} alt="Versy Logo" />
      </a>
    </div>
  );
};

export default Logo;
