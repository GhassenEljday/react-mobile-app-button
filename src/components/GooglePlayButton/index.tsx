import React, { FC } from "react";

import GooglePlay from "../../assets/icons/Google-Play.svg";
import Button from "../Button";

const googlePlayThemedLogos: _ThemedLogosMap = {
  light: GooglePlay,
  dark: GooglePlay,
};

const GooglePlayButton: FC<StoreButtonProps> = ({
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
      storeName={"Google Play"}
      logos={googlePlayThemedLogos}
      className={className}
      title={"GET IN ON"}
    />
  );
};

export default GooglePlayButton;
