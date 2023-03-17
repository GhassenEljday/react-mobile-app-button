import React, { FC } from "react";

const GooglePlay = require("../../assets/icons/Google-Play.svg");
import Button from "../Button";

type GooglePlayButtonProps = {
  theme?: "dark" | "light";
  height?: number;
  width?: number;
  className?: string;
  url: string;
};

const GooglePlayButton: FC<GooglePlayButtonProps> = ({
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
      storeName={"Google Play"}
      logo={GooglePlay}
      className={className}
      title={"GET IN ON"}
    />
  );
};

export default GooglePlayButton;
