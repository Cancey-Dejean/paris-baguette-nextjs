import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const pbSignature = localFont({
  src: [
    {
      path: "../public/fonts/pbsignature-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pbsignature-bold",
});

export const pbSpecialElite = localFont({
  src: [
    {
      path: "../public/fonts/pb_special_elite-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pbspecial-elite",
});
