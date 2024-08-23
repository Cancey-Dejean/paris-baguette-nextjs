import Container from "@/components/ui/container";
import Image from "next/image";
import AppStore from "@/components/AppStore";
import HeaderLine from "../ui/headerLine";

export default function Rewards({
  headline,
  showHeadlineImage,
  showBackgroundImage,
  subHeading,
  mainImage = "https://dummyimage.com/864x1426.png/faf5f1/171b60",
  mainImageAlt = "Phone image",
  description,
  showAppStore,
  caption,
}: {
  showBackgroundImage?: boolean;
  headline: string;
  showHeadlineImage?: boolean;
  subHeading?: string;
  mainImage?: string;
  mainImageAlt?: string;
  description?: string;
  showAppStore?: boolean;
  caption?: string;
}) {
  return (
    <section
      className="bg-primary bg-repeat text-white"
      style={{
        backgroundImage: `url(${showBackgroundImage ? "/images/pb-grunge.png" : ""})`,
      }}
    >
      <Container size="contained" className="flex items-center gap-[72px]">
        <div className="w-full max-w-[665px]">
          <div className="mb-5 flex items-center gap-4">
            {showHeadlineImage && (
              <div className="flex size-[88px] items-center justify-center rounded-full border-2 border-white">
                <Image
                  src="/images/pb-mark-b.svg"
                  alt="B logo"
                  width={55}
                  height={55}
                />
              </div>
            )}

            <h2 className="font-pbBold text-[70px] text-white">{headline}</h2>
          </div>

          <h3 className="mb-4 font-pbSpecial text-5xl leading-none text-white">
            {subHeading}
          </h3>

          <HeaderLine className="mb-10" />

          <p className="mb-7 font-roboto text-2xl">{description}</p>

          {showAppStore && <AppStore />}

          <p className="mt-5 inline-block text-sm font-light italic">
            {`*${caption}`}
          </p>
        </div>

        <div className="overflow-hidden rounded-[40px]">
          <Image src={mainImage} alt={mainImageAlt} width={433} height={713} />
        </div>
      </Container>
    </section>
  );
}
