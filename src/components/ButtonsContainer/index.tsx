import React, { FC, ReactNode } from "react";

import "./buttonsContainer.css";

type ButtonsContainerProps = {
  gap?: number;
  direction?: "row" | "column";
  children: ReactNode;
};

const ButtonsContainer: FC<ButtonsContainerProps> = ({
  children,
  gap,
  direction = "row",
}) => {
  return (
    <div
      className="buttons-container"
      style={{
        gap: gap,
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};

export default ButtonsContainer;
