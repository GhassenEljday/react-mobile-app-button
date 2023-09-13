# React Component for iOS App Store, Google Play, and Huawei AppGallery Download Buttons

Welcome to our versatile React component designed to seamlessly integrate download buttons for iOS App Store, Google Play Store, and Huawei AppGallery. Enhance your users' experience by providing effortless access to your mobile app on popular platforms. Elevate your app's visibility and accessibility today!

**Explore the Documentation**: [Documentation](https://react-mobile-app-button-one.vercel.app/?path=/docs/example-google-play-button--docs)

[![Support Us on Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J5CGNZQ)

## Installation

You can install this package using npm:

```bash
npm install react-mobile-app-button
```

Or, if you prefer Yarn:

```bash
yarn add react-mobile-app-button
```

Once installed, you'll have access to App Store, Google Play, and AppGallery download buttons for your web page, as shown below:

![iOS App Store Button](https://user-images.githubusercontent.com/58111243/226064773-ee6d7ce3-e3cf-4a37-95d6-5e6db6c916c3.png)
![Google Play Store Button](https://user-images.githubusercontent.com/58111243/226064822-65a6cf71-32fe-4298-b4ca-6f624f82dddf.png)

## Usage

Here's an example of how to use our component in your React application:

```javascript
import { GooglePlayButton } from "react-mobile-app-button";

export const MyComponent = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
    <div>
      <GooglePlayButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style"}
      />
    </div>
  );
};
```

You can also import multiple buttons at once and arrange them as needed:

```javascript
import {
  GooglePlayButton,
  AppGalleryButton,
  ButtonsContainer,
} from "react-mobile-app-button";

export const MyComponent = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";

  return (
    <ButtonsContainer>
      <GooglePlayButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style"}
      />

      <AppGalleryButton
        url={IOSUrl}
        theme={"light"}
        className={"custom-style"}
      />
    </ButtonsContainer>
  );
};
```

## Props

| Name      | Component                                                | Type             | Description                       |
| --------- | -------------------------------------------------------- | ---------------- | --------------------------------- |
| url       | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | string           | Store URL                         |
| theme     | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | "dark" / "light" | Button Theme                      |
| className | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | string           | For manual styling                |
| title     | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | string           | For custom message                |
| height    | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | number           | For manual styling                |
| width     | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | number           | For manual styling                |
| gap       | `ButtonsContainer`                                       | number           | Control the space between buttons |
| direction | `ButtonsContainer`                                       | "row" / "column" | Control flex direction            |

## Installation and Running the Project

To install and run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/GhassenEljday/react-mobile-app-button.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the project using Storybook:

   ```bash
   npm run storybook
   ```

## Getting Help

If you encounter any issues or have questions, please don't hesitate to reach out to us:

- **Email**: [ghasseneljday@gmail.com](mailto:ghasseneljday@gmail.com)
- **Issue Tracker**: [GitHub Issues](https://github.com/GhassenEljday/react-mobile-app-button/issues)

We're here to assist you in making the most of our React component.
