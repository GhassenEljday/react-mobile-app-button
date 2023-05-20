import { AppGalleryButton } from "../index";

export default {
  title: "Example/App Gallery Button",
  component: AppGalleryButton,
  tags: ["autodocs"],
};

export const DarkMode = {
  args: {
    theme: "dark",
  },
};

export const LightMode = {
  args: {
    theme: "light",
  },
};

/**
 * Example: height 40px
 */
export const CustomHeight = {
  args: {
    theme: "dark",
    height: 40,
  },
};

/**
 * Example: width 160px
 */
export const CustomWidth = {
  args: {
    theme: "dark",
    width: 160,
  },
};
