import React from "react";
import Members from "../aboutus/Members";

const AboutUsContainer = () => {
  return (
    <section className="central-container">
      <span className="aboutus-title">About us</span>
      <div className="summary">
        versy est un réseau social de microblogage type twitter. Il permet à un
        utilisateur d'envoyer gratuitement des micromessages, de partager des
        messages et des photos avec ses amis, de les liker ,de les commenter
        ainsi que de suivre d’autres personnes actives sur le réseau.
      </div>
      <Members />
    </section>
  );
};

export default AboutUsContainer;
