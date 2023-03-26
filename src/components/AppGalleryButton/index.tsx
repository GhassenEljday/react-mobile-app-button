import React, { FC } from "react";

import AppGallery from "../../assets/icons/Huawei.svg";
import Button from "../Button";

const appGalleryThemedLogos: _ThemedLogosMap = {
  light: AppGallery,
  dark: AppGallery,
};

const AppGalleryButton: FC<StoreButtonProps> = ({
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
      storeName={"AppGallery"}
      logos={appGalleryThemedLogos}
      className={className}
      title={"EXPLORE IT ON"}
    />
  );
};

export default AppGalleryButton;
