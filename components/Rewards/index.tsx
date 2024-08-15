import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { AppStoreLinks } from "@/types";
import { appStoreLinks } from "@/lib/dummyData";
import AppStore from "@/components/AppStore";

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

          <AppStore />

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
