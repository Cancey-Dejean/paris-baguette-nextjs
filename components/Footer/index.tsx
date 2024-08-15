import Container from "@/components/ui/container";
import Image from "next/image";
import { LinkItem } from "@/types";
import Link from "next/link";
import {
  HugeiconsInstagram,
  IcBaselineTiktok,
  PajamasTwitter,
  RiFacebookFill,
  RiLinkedinFill,
} from "@/constants/svgIcons";
import { appStoreLinks } from "@/lib/dummyData";
import AppStore from "@/components/AppStore";

const primaryMenu: LinkItem[] = [
  {
    label: "Order Online",
    url: "/",
    newTab: false,
  },
  {
    label: "Menu",
    url: "/",
    newTab: false,
  },
  {
    label: "Locations",
    url: "/",
    newTab: false,
  },
  {
    label: "About",
    url: "/",
    newTab: false,
  },
  {
    label: "Rewards",
    url: "/",
    newTab: false,
  },
  {
    label: "Catering",
    url: "/",
    newTab: false,
  },
];

const secondaryMenu: LinkItem[] = [
  {
    label: "Careers",
    url: "/",
    newTab: false,
  },
  {
    label: "Own A Café",
    url: "/",
    newTab: false,
  },
  {
    label: "Gift Cards",
    url: "/",
    newTab: false,
  },
  {
    label: "Nutritional",
    url: "/",
    newTab: false,
  },
  {
    label: "Contact",
    url: "/",
    newTab: false,
  },
  {
    label: "Paris Baguette Canada",
    url: "/",
    newTab: false,
  },
];

const socialIcons = {
  facebook: RiFacebookFill,
  instagram: HugeiconsInstagram,
  tiktok: IcBaselineTiktok,
  twitterX: PajamasTwitter,
  linkedIn: RiLinkedinFill,
};

type SocialIconKey = keyof typeof socialIcons;

const socialLinks = [
  {
    url: "/",
    icon: "facebook",
  },
  {
    url: "/",
    icon: "instagram",
  },
  {
    url: "/",
    icon: "tiktok",
  },
  {
    url: "/",
    icon: "twitterX",
  },
  {
    url: "/",
    icon: "linkedIn",
  },
];

const footerLinks: LinkItem[] = [
  {
    label: "Sitemap",
    url: "/",
    newTab: false,
  },
  {
    label: "Privacy Policy",
    url: "/",
    newTab: false,
  },
  {
    label: "Terms Of Use",
    url: "/",
    newTab: false,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      <Container className="mb-10 grid grid-cols-3 py-[100px]">
        <div>
          <Image
            src="/images/paris-baguette-mark.svg"
            alt="Logo"
            width={265}
            height={265}
          />
        </div>

        <div className="flex flex-col gap-10">
          <ul>
            {primaryMenu.map(({ label, url, newTab }) => (
              <li key={label}>
                <Link
                  href={url}
                  target={newTab ? "_blank" : "_self"}
                  rel={newTab ? "noopener noreferrer" : undefined}
                  className="font-pbBold text-xl transition-all duration-300 ease-in-out hover:text-secondary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ul>
            {secondaryMenu.map(({ label, url, newTab }) => (
              <li key={label}>
                <Link
                  href={url}
                  target={newTab ? "_blank" : "_self"}
                  rel={newTab ? "noopener noreferrer" : undefined}
                  className="font-pbBold transition-all duration-300 ease-in-out hover:text-secondary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-pbSpecial mb-5 text-2xl font-semibold uppercase">
            Connect With Us
          </h3>

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ icon, url }, index) => {
              const IconComponent = socialIcons[icon as SocialIconKey];
              return (
                <li key={index}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 ease-in-out hover:bg-secondary"
                  >
                    <IconComponent className="size-6" />
                    <span className="sr-only">{icon}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <Container className="flex items-center justify-between gap-5 border-t border-dotted py-9">
        <AppStore />

        <ul className="flex font-pbBold">
          {footerLinks.map(({ label, url, newTab }) => (
            <li key={label}>
              <Link
                href={url}
                target={newTab ? "_blank" : "_self"}
                rel={newTab ? "noopener noreferrer" : undefined}
                className="p-5 font-pbBold transition-all duration-300 ease-in-out hover:text-secondary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
