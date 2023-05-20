import ButtonsContainerExample from "./ButtonsContainerExample";

export default {
  title: "Example/Buttons Container",
  component: ButtonsContainerExample,
  tags: ["autodocs"],
};

/**
 * Example gap 20px
 */
export const CustomGap = {
  args: {
    gap: 20,
  },
};

export const DirectionRow = {
  args: {
    direction: "row",
  },
};

export const DirectionColumn = {
  args: {
    direction: "column",
  },
};
