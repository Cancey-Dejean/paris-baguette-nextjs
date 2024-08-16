import { ButtonProps } from "@/components/ui/button";

export type LinkItem = {
  label: string;
  url: string;
  newTab?: boolean;
};

export type ButtonItem = ButtonProps & LinkItem;

export type Navigation = LinkItem[];

export type ProductCardIcons = {
  [key: string]: string;
};

export type ProductCardLink = LinkItem & {
  icon: "cart" | "circleArrow";
};

export type CardProduct = {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  cardLinks?: ProductCardLink[];
};

export type ImageTextRowItem = {
  title: string;
  image: string;
  imageAlt?: string;
  description: string;
  buttons?: ButtonItem[];
};

export type AppStoreLinks = {
  image: string;
  imageAlt?: string;
  width?: number;
  height?: number;
  url: string;
}[];
