import React, { FC } from "react";

import AppStore from "../../assets/icons/Apple.svg";
import AppStoreLight from "../../assets/icons/Apple-light.svg";
import Button from "../Button";
import { useSystemTheme } from "../../hooks/useSystemTheme";

type AppStoreButtonProps = {
  theme?: "dark" | "light";
  height?: number;
  width?: number;
  className?: string;
  url: string;
};

const appStoreThemedLogos: _ThemedLogosMap = {
  light: AppStore,
  dark: AppStoreLight,
};

const AppStoreButton: FC<StoreButtonProps> = ({
  theme,
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
      logos={appStoreThemedLogos}
      className={className}
      title={"Download on the"}
    />
  );
};

export default AppStoreButton;
