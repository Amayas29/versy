import React from "react";

const Form = (props) => {
  return (
    <form className="auth-wrapper">
      <h2 className="auth-title">{props.title}</h2>

      {props.children}
      <div className="auth-submit" onClick={props.handleAction}>
        {props.action}
      </div>

      {props.moveTo}
    </form>
  );
};

export default Form;
