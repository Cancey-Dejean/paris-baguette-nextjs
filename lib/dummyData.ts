import {
  AppStoreLinks,
  ButtonItem,
  CardProduct,
  ImageTextRowItem,
  Navigation,
  ProductCardLink,
} from "@/types";

export const navigation: Navigation = [
  {
    label: "Link 1",
    url: "/",
    newTab: false,
  },
  {
    label: "Link 2",
    url: "/",
    newTab: false,
  },
  {
    label: "Link 3",
    url: "/",
    newTab: false,
  },
  {
    label: "Link 4",
    url: "/",
    newTab: false,
  },
];

export const cardLinks: ProductCardLink[] = [
  {
    label: "Order Now",
    url: "/#cart",
    newTab: true,
    icon: "cart",
  },
  {
    label: "Details",
    url: "/#details",
    newTab: false,
    icon: "circleArrow",
  },
];

export const heroButtons = [
  {
    label: "Get started for free",
    url: "/#get-started",
    newTab: true,
    variant: "default",
    size: "default",
  },
];

export const buttons: ButtonItem[] = [
  {
    label: "Order Now",
    url: "/#cart",
    newTab: true,
    variant: "secondary",
    size: "sm",
  },
  {
    label: "Details",
    url: "/#details",
    newTab: false,
    variant: "tertiary",
    size: "sm",
  },
];

export const callToAction = [
  {
    label: "Order Now",
    url: "/",
    newTab: false,
    variant: "outline-light",
  },
];

export const appStoreLinks: AppStoreLinks = [
  {
    image: "/images/apple-app-store.png",
    imageAlt: "Download on the Apple App Store",
    width: 120,
    height: 40,
    url: "https://apps.apple.com/us/app/pb-rewards/id6442200078",
  },
  {
    image: "/images/google-play-store.png",
    imageAlt: "Download on Google Play",
    width: 120,
    height: 40,
    url: "https://apps.apple.com/us/app/pb-rewards/id6442200078",
  },
];

export const cardItemsLo: CardProduct[] = [
  {
    image: "https://dummyimage.com/1170x580.png/171b60/dddddd",
    imageAlt: "Product 1 Alt",
    title: "Product 1",
    description: "This is a brief description",
    cardLinks: [
      {
        label: "Button 1",
        url: "#",
        icon: "cart",
      },
      {
        label: "Button 2",
        url: "#",
        icon: "circleArrow",
      },
    ],
  },
  {
    image: "https://dummyimage.com/1170x580.png/171b60/dddddd",
    imageAlt: "Product 2 Alt",
    title: "Product 2",
    description: "This is a brief description",
    cardLinks: [
      {
        label: "Button 1",
        url: "#",
        icon: "cart",
      },
      {
        label: "Button 2",
        url: "#",
        icon: "circleArrow",
      },
    ],
  },
  {
    image: "https://dummyimage.com/1170x580.png/171b60/dddddd",
    imageAlt: "Product 3 Alt",
    title: "Product 3",
    description: "This is a brief description",
    cardLinks: [
      {
        label: "Button 1",
        url: "#",
        icon: "cart",
      },
      {
        label: "Button 2",
        url: "#",
        icon: "circleArrow",
      },
    ],
  },
  {
    image: "https://dummyimage.com/1170x580.png/171b60/dddddd",
    imageAlt: "Product 4 Alt",
    title: "Product 4",
    description: "This is a brief description",
    cardLinks: [
      {
        label: "Button 1",
        url: "#",
        icon: "cart",
      },
      {
        label: "Button 2",
        url: "#",
        icon: "circleArrow",
      },
    ],
  },
];

export const cardItemsHi: CardProduct[] = [
  {
    image: "/images/lemon-citrus-cake.jpg",

    imageAlt: "Slices of Citrus",
    title: "Slices of Citrus",
    description: "Slice into summer with our Lemon Citrus Layer Cake!",
    cardLinks: [
      {
        label: "Order Now",
        url: "/cart",
        icon: "cart",
      },
      {
        label: "Details",
        url: "/details",
        icon: "circleArrow",
      },
    ],
  },
  {
    image: "/images/lemon-supreme.jpg",
    imageAlt: "Supremely Summer",
    title: "Supremely Summer",
    description:
      "Make your summer supreme with Paris Baguette’s NEW Supreme Croissants, available in Lemon or Chocolate.",
    cardLinks: [
      {
        label: "Order Now",
        url: "/cart",
        icon: "cart",
      },
      {
        label: "Details",
        url: "/details",
        icon: "circleArrow",
      },
    ],
  },
  {
    image: "/images/beverage-line-up.jpg",
    imageAlt: "Sips of Summer",
    title: "Sips of Summer",
    description:
      "Get refreshed this summer with Caramel Coconut Lattes and Lemonade Refreshers in Watermelon or NEW Mango flavors!",
    cardLinks: [
      {
        label: "Order Now",
        url: "/cart",
        icon: "cart",
      },
      {
        label: "Details",
        url: "/details",
        icon: "circleArrow",
      },
    ],
  },
];

export const rowItemsLo: ImageTextRowItem[] = [
  {
    image: "https://dummyimage.com/100x100.png/171b60/dddddd",
    imageAlt: "icon",
    title: "Title",
    description: "This is a description",
    buttons: [
      {
        label: "Order Now",
        url: "/#order",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
  {
    image: "https://dummyimage.com/100x100.png/171b60/dddddd",
    imageAlt: "icon",
    title: "Title",
    description: "This is a description",
    buttons: [
      {
        label: "Order Now",
        url: "/#order",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
  {
    image: "https://dummyimage.com/100x100.png/171b60/dddddd",
    imageAlt: "icon",
    title: "Title",
    description: "This is a description",
    buttons: [
      {
        label: "Order Now",
        url: "/#order",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
];

export const rowItemsHi: ImageTextRowItem[] = [
  {
    image: "/images/icon-bakery.svg",
    imageAlt: "icon",
    title: "Bakery",
    description:
      "A delicious variety of sweet and savory pastries, breads, and donuts, freshly baked every day.",
    buttons: [
      {
        label: "Order Now",
        url: "/#cart",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
  {
    image: "/images/icon-cake.svg",
    imageAlt: "icon",
    title: "Cakes",
    description:
      "Made by our master cakers and decorated to perfection, down to the last detail.",
    buttons: [
      {
        label: "Order Now",
        url: "/#cart",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
  {
    image: "/images/icon-catering.svg",
    imageAlt: "Catering Icon",
    title: "Catering",
    description: "Power your gathering with Paris Baguette.",
    buttons: [
      {
        label: "Order Now",
        url: "/#cart",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
];
