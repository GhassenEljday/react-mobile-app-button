/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    storySort: {
      order: ["Example", ["Google Play Button"]],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
