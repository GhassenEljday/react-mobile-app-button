import React, { FC } from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  theme?: "dark" | "light";
  height?: number;
  width?: number;
  logo: () => React.JSX.Element;
  storeName: string;
  title: string;
  url: string;
  className?: string;
  border?: number;
};

const ButtonContainer = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  border: 2px solid #202020;
  border-radius: ${(props) => props.border || 10}px;

  ${(props) =>
    props.theme === "dark" &&
    css`
      background-color: #202020;
      color: #fff;
    `}
`;

const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Outfit", sans-serif;
`;

const ButtonTitle = styled.span`
  font-size: 12px;
`;

const ButtonStoreName = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Button: FC<ButtonProps> = ({
  theme = "light",
  height = 50,
  width = 180,
  border,
  logo,
  storeName,
  title,
  url,
  className,
}) => {
  const Logo = logo;
  return (
    <ButtonContainer
      theme={theme}
      border={border}
      className={className}
      style={{
        height,
        width,
        borderRadius: border,
      }}
      onClick={() => window.open(url, "_blank")}
      logo={logo}
      storeName={storeName}
      title={title}
      url={url}
    >
      <Logo />
      <ButtonTextContainer>
        <ButtonTitle>{title}</ButtonTitle>
        <ButtonStoreName>{storeName}</ButtonStoreName>
      </ButtonTextContainer>
    </ButtonContainer>
  );
};

export default Button;
