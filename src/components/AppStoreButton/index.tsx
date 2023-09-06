import React, { FC } from "react";

import AppStore from "../../assets/icons/Apple.svg";
import AppStoreLight from "../../assets/icons/Apple-light.svg";
import Button from "../Button";

type AppStoreButtonProps = {
  /**
   * @default dark
   */
  theme?: "dark" | "light";

  /**
   * @default Download on the
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
 * @example <AppStoreButton theme="light" height={70} width={130} className="button-container" url="https://www.apple.com/app-store/" />
 * @returns
 */
const AppStoreButton: FC<AppStoreButtonProps> = ({
  theme = "light",
  height,
  title = "Download on the",
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
      title={title}
    />
  );
};

export default AppStoreButton;
