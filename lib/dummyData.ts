import {
  AppStoreLinks,
  ButtonItem,
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

export const cardItemsLo = [
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
];

export const cardItemsHi = [
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
