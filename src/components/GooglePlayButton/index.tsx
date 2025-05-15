import React, { FC } from "react";

import GooglePlay from "../../assets/icons/Google-Play";
import Button from "../Button";

type GooglePlayButtonProps = {
  /**
   * @default dark
   */
  theme?: "dark" | "light";

  /**
   * @default GET IT ON
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
 * @example <GooglePlayButton theme="light" height={70} width={130} className="button-container" url="https://play.google.com/" />
 * @returns
 */
const GooglePlayButton: FC<GooglePlayButtonProps> = ({
  theme = "light",
  height,
  title = "GET IT ON",
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
      storeName={"Google Play"}
      logo={GooglePlay}
      className={className}
      title={title}
    />
  );
};

export default GooglePlayButton;
