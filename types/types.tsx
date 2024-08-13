export type LinkItem = {
  label: string;
  url: string;
  newTab?: boolean;
};

export type Navigation = LinkItem[];

export type ProductCardIcons = {
  [key: string]: string;
};

export type ProductCardLink = {
  label: string;
  url: string;
  icon: "cart" | "circleArrow";
};

export type CardProduct = {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  links?: [
    {
      label: string;
      url: string;
      icon: "cart" | "circleArrow";
    },
  ];
};
