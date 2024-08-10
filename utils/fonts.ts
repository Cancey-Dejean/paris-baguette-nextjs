import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
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
