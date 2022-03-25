import React, { useEffect, useState } from "react";
import Member from "./Member";
import Dayane from "../../assets/images/Dayane.jpeg";
import Amayas from "../../assets/images/Amayas.jpg";

const Members = () => {
  const members = [dayane, amayas];

  return (
    <ul className="contributors">
      {members.map((contributor) => (
        <Member member={contributor} />
      ))}
    </ul>
  );
};

const dayane = {
  FirstName: "Rayane",
  FamilyName: "MAKHLOUF",
  picture: Dayane,
  description:
    " Hi :), I'm Rayane, an L3 college student in computer science at SORBONNE University.",
  github: "https://github.com/rayane-47",
};

const amayas = {
  FirstName: "Amayas",
  FamilyName: "SADI",
  picture: Amayas,
  description:
    " Hi :), I'm Amayas, an L3 college student in computer science at SORBONNE University.",
  github: "https://github.com/Amayas29",
};

export default Members;
