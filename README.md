# react-mobile-app-button

A react component that allows you to place an iOS App Store, Google Play Store and Huawei AppGallery Download button!

 Check documentation here => **[React Mobile App Button Docs](https://react-mobile-app-button-one.vercel.app/?path=/docs/example-google-play-button--docs)**

## Install

install using `npm`

```bash
npm i react-mobile-app-button
```

or:

```bash
yarn add react-mobile-app-button
```

You will get an App Store, Google Play and AppGallery download button on Web page looks like this:

![image](https://user-images.githubusercontent.com/58111243/226064773-ee6d7ce3-e3cf-4a37-95d6-5e6db6c916c3.png)
![image](https://user-images.githubusercontent.com/58111243/226064822-65a6cf71-32fe-4298-b4ca-6f624f82dddf.png)

## Usage

Example Code:

```js
import { GooglePlayButton } from "react-mobile-app-button";
export const MyComponent = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=host.exp.exponent";
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

You can also import more than one button in a row:

```js
import {
  GooglePlayButton,
  AppGalleryButton,
  ButtonsContainer,
} from "react-mobile-app-button";
export const MyComponent = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=host.exp.exponent";
  const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  return (
    <ButtonsContainer>
      <GooglePlayButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style"}
      />
      <AppGalleryButton
        url={iOSUrl}
        theme={"light"}
        className={"custom-style"}
      />
    </ButtonsContainer>
  );
};
```

## props

| Name      | Component                                                | Type             | Description                       |
| --------- | -------------------------------------------------------- | ---------------- | --------------------------------- |
| url       | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | string           | Store URL                         |
| theme     | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | "dark" / "light" | Button Theme                      |
| className | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | string           | For manual styling              |
| height    | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | number           | For manually styling              |
| width     | `GooglePlayButton`, `AppGalleryButton`, `AppStoreButton` | number           | For manually styling              |
| gap       | `ButtonsContainer`                                       | number           | Control the space between buttons |
| direction | `ButtonsContainer`                                       | "row" / "column" | Control flex direction            |
|  |

## Install and run the project


Clone the repository
```bash
gir clone https://github.com/GhassenEljday/react-mobile-app-button.git
```

Install the dependencies
```bash
npm install 
```

Finally you can run the project using `StoryBook` 
```bash
npm run storybook
```