import React from "react";
import "./buttonsContainer.css";
const ButtonsContainer = ({
  children,
  gap,
  direction = "row"
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "buttons-container",
    style: {
      gap: gap,
      flexDirection: direction
    }
  }, children);
};
export default ButtonsContainer;