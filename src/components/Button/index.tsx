import React, { FC } from "react";

import classNames from "classnames";
import "./button.css";
import { useSystemTheme } from "../../hooks/useSystemTheme";

const Button: FC<_ButtonProps> = ({
  theme: preferedTheme,
  height = 60,
  width = 180,
  border,
  logos,
  storeName,
  title,
  url,
  className,
}) => {
  const systemTheme = useSystemTheme();
  const theme = preferedTheme || systemTheme;
  return (
    <div
      onClick={() => url && window.open(url, "_blank")}
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
      <img src={logos[theme]} alt={storeName} />
      <div className="button-text-container">
        <span className="button-title">{title}</span>
        <span className="button-store-name">{storeName}</span>
      </div>
    </div>
  );
};

export default Button;
