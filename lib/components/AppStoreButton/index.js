import React from "react";
var AppStore = function AppStore(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M22.667 6.639C23.76 5.223 24.59 3.22 24.29 1.178c-1.789.124-3.88 1.272-5.098 2.767-1.111 1.356-2.026 3.37-1.67 5.328 1.955.061 3.975-1.114 5.145-2.634Z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M31.36 12.466c-1.718-2.16-4.132-3.414-6.412-3.414-3.009 0-4.282 1.445-6.373 1.445-2.155 0-3.793-1.44-6.396-1.44-2.556 0-5.278 1.566-7.004 4.245-2.426 3.773-2.011 10.865 1.921 16.906 1.407 2.162 3.286 4.593 5.744 4.614 2.187.02 2.803-1.407 5.767-1.422 2.963-.016 3.525 1.441 5.708 1.418 2.46-.02 4.442-2.713 5.849-4.875 1.009-1.55 1.384-2.33 2.166-4.079-5.69-2.172-6.601-10.285-.97-13.399Z",
    fill: "#000"
  }));
};
AppStore.defaultProps = {
  width: "36",
  height: "36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var AppStoreLight = function AppStoreLight(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M22.667 6.639C23.76 5.223 24.59 3.22 24.29 1.178c-1.789.124-3.88 1.272-5.098 2.767-1.111 1.356-2.026 3.37-1.67 5.328 1.955.061 3.975-1.114 5.145-2.634Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M31.36 12.466c-1.718-2.16-4.132-3.414-6.412-3.414-3.009 0-4.282 1.445-6.373 1.445-2.155 0-3.793-1.44-6.396-1.44-2.556 0-5.278 1.566-7.004 4.245-2.426 3.773-2.011 10.865 1.921 16.906 1.407 2.162 3.286 4.593 5.744 4.614 2.187.02 2.803-1.407 5.767-1.422 2.963-.016 3.525 1.441 5.708 1.418 2.46-.02 4.442-2.713 5.849-4.875 1.009-1.55 1.384-2.33 2.166-4.079-5.69-2.172-6.601-10.285-.97-13.399Z",
    fill: "#fff"
  }));
};
AppStoreLight.defaultProps = {
  width: "36",
  height: "36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
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