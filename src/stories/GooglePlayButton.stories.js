import { GooglePlayButton } from "../index";

export default {
  title: "Example/Google Play Button",
  component: GooglePlayButton,
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

/**
 * Example: "PÓNGALO EN MARCHA"
 */
export const CustomTitle = {
  args: {
    title: "PÓNGALO EN MARCHA",
  },
};
