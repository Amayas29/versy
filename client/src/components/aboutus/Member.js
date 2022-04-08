import React from "react";

const Member = (props) => {
  const { member } = props;

  return (
    <li className="contributor">
      <img
        className="contributor-picture"
        src={member.picture}
        alt="contributor"
      />

      <div className="aboutus-data-container">
        <span className="contributor-name">
          {member.FirstName} {member.FamilyName}
        </span>

        <span>{member.description}</span>

        <span className="contributor-github">
          <em class="fa-brands fa-github"></em>
          <a className="contributor-github-link" href={member.github}>
            {member.github}
          </a>
        </span>
      </div>
    </li>
  );
};

export default Member;
