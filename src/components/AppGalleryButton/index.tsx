import React, { FC } from "react";

import Huawei from "../../assets/icons/Huawei";
import Button from "../Button";

type AppGalleryButtonProps = {
  /**
   * @default dark
   */
  theme?: "dark" | "light";

  /**
   * @default EXPLORE IT ON
   */
  title?: string;

  /**
   * @default 60px
   */
  height?: number;

  /**
   * @default 180px
   */
  width?: number;

  /**
   * @default ''
   */
  className?: string;

  /**
   * @default ''
   */
  url: string;
};

/**
 *
 * @param {string} theme Choose a theme between dark and light
 * @param {number} height Controls the height of the button
 * @param {number} width Controls the width of the button
 * @param {string} title Set custom title for the button
 * @param {string} className Add className to the button in order to customize the button appearance
 * @param {string} url Add your store url to the button
 * @example <AppGalleryButton theme="light" height={70} width={130} className="button-container" url="https://appgallery.huawei.com/" />
 * @returns
 */
const AppGalleryButton: FC<AppGalleryButtonProps> = ({
  theme = "light",
  height,
  title = "EXPLORE IT ON",
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
      title={title}
    />
  );
};

export default AppGalleryButton;
