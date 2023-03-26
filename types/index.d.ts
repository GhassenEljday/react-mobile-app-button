declare module "*.svg";

type Theme = "dark" | "light";

type _ThemedLogosMap = Record<Theme, string>;

type _ButtonProps = StoreButtonProps & {
  logos: _ThemedLogosMap;
  storeName: string;
  title: string;
  border?: number;
};

type StoreButtonProps = {
  theme?: Theme;
  height?: number;
  width?: number;
  className?: string;
  url: string;
};
