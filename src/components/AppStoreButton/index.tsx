import React, { FC } from "react";

import AppStore from "../../assets/icons/Apple.svg";
import AppStoreLight from "../../assets/icons/Apple-light.svg";
import Button from "../Button";

type AppStoreButtonProps = {
  theme?: "dark" | "light";
  height?: number;
  width?: number;
  className?: string;
  url: string;
};

const AppStoreButton: FC<AppStoreButtonProps> = ({
  theme = "light",
  height,
  width,
  className,
  url,
}) => {
  return (
    <Button
      theme={theme}
      height={height}
      width={width}
      url={url}
      storeName={"App Store"}
      logo={theme === "dark" ? AppStoreLight : AppStore}
      className={className}
      title={"Download on the"}
    />
  );
};

export default AppStoreButton;
