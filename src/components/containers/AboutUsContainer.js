import React from "react";

const AboutUsContainer = () => {
  return (
    <section className="central-container">
      <Member name="Amayas" />
      <Member name="Dayane" />
    </section>
  );
};

const Member = (props) => {
  return <div className="member-container">{props.name}</div>;
};

export default AboutUsContainer;
