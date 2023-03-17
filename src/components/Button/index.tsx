import React, { FC } from "react";

const classNames = require("classnames");
import "././button.css";

type ButtonProps = {
  theme?: "dark" | "light";
  height?: number;
  width?: number;
  logo: string;
  storeName: string;
  title: string;
  url: string;
  className?: string;
  border?: number;
};

const Button: FC<ButtonProps> = ({
  theme = "light",
  height = 50,
  width = 170,
  border,
  logo,
  storeName,
  title,
  url,
  className,
}) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      style={{
        height: height,
        width: width,
        borderRadius: border,
      }}
      className={classNames(
        "button-container",
        `button-container-${theme}`,
        className
      )}
    >
      <img src={logo} alt={storeName} />
      <div className="button-text-container">
        <span className="button-title">{title}</span>
        <span className="button-store-name">{storeName}</span>
      </div>
    </div>
  );
};

export default Button;
