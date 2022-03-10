import React from "react";

const ImageHolder = (props) => {
  return (
    <img className={"message-image-holder"} src={props.image} alt=""></img>
  );
};

export default ImageHolder;
