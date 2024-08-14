import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { AppStoreLinks } from "@/types";

const appStoreLinks: AppStoreLinks = [
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

export default function Rewards() {
  return (
    <section
      className="bg-primary bg-repeat text-white"
      style={{
        backgroundImage: "url('/images/pb-grunge.png')",
      }}
    >
      <Container size="contained" className="flex items-center gap-[72px]">
        <div className="max-w-[665px]">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex size-[88px] items-center justify-center rounded-full border-2 border-white">
              <Image
                src="/images/pb-mark-b.svg"
                alt="Rewards Phone"
                width={55}
                height={55}
              />
            </div>
            <h2 className="font-pbBold text-[70px]">Rewards</h2>
          </div>

          <h3 className="font-pbSpecial mb-4 text-5xl leading-none">
            Earn, Redeem, Repeat
          </h3>

          <div className="mb-10 h-[9px] w-[210px] bg-secondary" />

          <p className="font-roboto mb-7 text-2xl">
            Download our new and improved mobile app to start earning free
            pastries, beverages, and more with PB Rewards. Enjoy a free* pastry
            with your first purchase when you sign up!
          </p>

          <div className="flex items-center gap-5">
            {appStoreLinks.map(
              ({ image, imageAlt, url, width, height }, index) => (
                <Link
                  key={index}
                  href={url}
                  target="_blank"
                  className="group bg-[#666] transition-all duration-300 ease-in-out hover:bg-black"
                  rel="nofollow noreferrer"
                >
                  <Image
                    src={image}
                    alt={imageAlt || "No alt set"}
                    width={width || 132}
                    height={height || 40}
                    className="-in-out mix-blend-lighten grayscale transition-all duration-300 group-hover:filter-none"
                  />
                </Link>
              ),
            )}
          </div>

          <p className="mt-5 inline-block text-sm font-light italic">
            *New PB Rewards members only
          </p>
        </div>

        <div className="overflow-hidden rounded-[40px]">
          <Image
            src="/images/rewards-phone.jpg"
            alt="Rewards Phone"
            width={433}
            height={713}
          />
        </div>
      </Container>
    </section>
  );
}
