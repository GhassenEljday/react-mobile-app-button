import React from "react";
import Huawei from "../../assets/icons/Huawei.svg";
import Button from "../Button";
const AppGalleryButton = ({
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
    storeName: "AppGallery",
    logo: Huawei,
    className: className,
    title: "EXPLORE IT ON"
  });
};
export default AppGalleryButton;