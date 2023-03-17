import React, { FC } from "react";

import Huawei from "../../assets/icons/Huawei.svg";
import Button from "../Button";

type AppGalleryButtonProps = {
  theme?: "dark" | "light";
  height?: number;
  width?: number;
  className?: string;
  url: string;
};

const AppGalleryButton: FC<AppGalleryButtonProps> = ({
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
      storeName={"AppGallery"}
      logo={Huawei}
      className={className}
      title={"EXPLORE IT ON"}
    />
  );
};

export default AppGalleryButton;
