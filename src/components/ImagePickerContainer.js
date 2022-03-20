import React from "react";
import { ImagePicker } from "react-file-picker";

const ImagePickerContainer = (props) => {
  return (
    <ImagePicker
      extensions={["jpg", "jpeg", "png"]}
      onChange={props.getImage}
      dims={{
        minWidth: 0,
        maxWidth: 40000,
        minHeight: 0,
        maxHeight: 40000,
      }}
      onError={(errMsg) => {
        alert(errMsg);
      }}
    >
      <button className={`icon fa-solid ${props.icon} fa-xl hide`}></button>
    </ImagePicker>
  );
};

export default ImagePickerContainer;
