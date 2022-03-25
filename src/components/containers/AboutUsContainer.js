import React from "react";
import Members from "../AboutUsComponents/Members";

const AboutUsContainer = () => {
  return (
    <section className="central-container">
      <span className="aboutus-title">About us</span>
      <div className="summary">versy est un site ... </div>
      <Members />
    </section>
  );
};

export default AboutUsContainer;
