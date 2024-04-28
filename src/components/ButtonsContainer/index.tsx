import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

const ButtonTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

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

/**
 *
 * @param {number} gap Add additional spacing between buttons
 * @param {string} direction Change direction of the buttons between column and row
 * @example <ButtonsContainer gap={10} direction="column"> <GooglePlayButton/> <AppGalleryButton/> </ButtonsContainer>
 * @returns
 */
const ButtonsContainer: FC<ButtonsContainerProps> = ({
  children,
  gap,
  direction = "row",
}) => {
  return (
    <ButtonTextContainer
      style={{
        gap: gap,
        flexDirection: direction,
      }}
    >
      {children}
    </ButtonTextContainer>
  );
};

export default ButtonsContainer;
