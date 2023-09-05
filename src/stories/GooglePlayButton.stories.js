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
 * Example: "GET IT ON"
 */
export const CustomTitle = {
  args: {
    title: "GET IT ON",
  },
};
