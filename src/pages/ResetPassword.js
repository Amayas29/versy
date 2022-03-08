import React from "react";
import MainContainer from "../components/containers/MainContainer";
import MenuContainer from "../components/containers/MenuContainer";

const ResetPassword = (props) => {
  return (
    <div className="app">
      <MenuContainer setPage={props.setPage} />
      <MainContainer></MainContainer>
    </div>
  );
};

export default ResetPassword;
