import React from "react";
import AppStore from "../../assets/icons/Apple.svg";
import AppStoreLight from "../../assets/icons/Apple-light.svg";
import Button from "../Button";
const AppStoreButton = ({
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
    storeName: "App Store",
    logo: theme === "dark" ? AppStoreLight : AppStore,
    className: className,
    title: "Download on the"
  });
};
export default AppStoreButton;