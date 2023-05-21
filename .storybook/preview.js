/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
