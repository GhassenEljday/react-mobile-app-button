import React from "react";
const classNames = require("classnames");
import "././button.css";
const Button = ({
  theme = "light",
  height = 50,
  width = 170,
  border,
  logo,
  storeName,
  title,
  url,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => window.open(url, "_blank"),
    style: {
      height: height,
      width: width,
      borderRadius: border
    },
    className: classNames("button-container", `button-container-${theme}`, className)
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: storeName
  }), /*#__PURE__*/React.createElement("div", {
    className: "button-text-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "button-title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "button-store-name"
  }, storeName)));
};
export default Button;