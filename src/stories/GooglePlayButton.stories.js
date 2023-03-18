import React from "react";
import { storiesOf } from "@storybook/react";

import {
  GooglePlayButton,
  AppGalleryButton,
  AppStoreButton,
  ButtonsContainer,
} from "../index";

const stories = storiesOf("App test", module);

stories.add("App", () => {
  return (
    <ButtonsContainer>
      <AppStoreButton />
      <GooglePlayButton />
      <AppGalleryButton />
    </ButtonsContainer>
  );
});
