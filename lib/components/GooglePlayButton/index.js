import React from "react";
import GooglePlay from "../../assets/icons/Google-Play.svg";
import Button from "../Button";
const GooglePlayButton = ({
  theme = "light",
  height,
  width,
  className,
  url
}) => {
  return /*#__PURE__*/React.createElement(Button, {
    theme: theme,
    height: height,
    width: width,
    url: url,
    storeName: "Google Play",
    logo: GooglePlay,
    className: className,
    title: "GET IN ON"
  });
};
export default GooglePlayButton;