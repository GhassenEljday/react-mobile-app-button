import React, { FC, ReactNode } from "react";
import { ButtonsContainer, GooglePlayButton, AppStoreButton } from "../index";

type ButtonsContainerProps = {
  /**
   * @default ''
   */
  gap?: number;

  /**
   * @default row
   */
  direction?: "row" | "column";
  children: ReactNode;
};

const ButtonsContainerExample: FC<ButtonsContainerProps> = ({
  gap,
  direction = "row",
}) => {
  return (
    <ButtonsContainer gap={gap} direction={direction}>
      <GooglePlayButton url="" />
      <AppStoreButton url="" />
    </ButtonsContainer>
  );
};

export default ButtonsContainerExample;
