import Hero from "@/components/Hero";
import Rewards from "@/components/Rewards";
import ImageTextStack from "@/components/ImageTextStack";
import Video from "@/components/Video";
import { cardItemsHi, rowItemsHi } from "@/lib/dummyData";
import FeaturedCollection from "@/components/FeaturedCollection";

export default function Home() {
  return (
    <>
      <Hero
        headline="Squeeze the day"
        subHeading="Dive into our delectable summer menu."
        mainImage="/images/hero.jpg"
        buttons={[
          {
            label: "View the menu",
            url: "/menu",
          },
        ]}
      />
      <div
        className="bg-[length:1200px_auto]"
        style={{
          backgroundImage: `url("/images/bg-beige-texture.jpg")`,
        }}
      >
        <FeaturedCollection cardItems={cardItemsHi} />
      </div>

      <Rewards
        headline="Rewards"
        subHeading="Earn, Redeem, Repeat"
        description="Download our new and improved mobile app to start earning free pastries, beverages, and more with PB Rewards. Enjoy a free* pastry with your first purchase when you sign up!"
        showAppStore
        showHeadlineImage
        caption="New PB Rewards members only"
        mainImage="/images/rewards-phone.jpg"
        mainImageAlt="PB Rewards mobile app"
      />

      <ImageTextStack
        mainImage="/images/food-spread.jpg"
        mainImageAlt="PB Rewards mobile app"
        rowItems={rowItemsHi}
      />

      <Video
        videoUrl="/videos/PB-2024-Menuboard.mp4"
        headline="Welcome to your neighborhood bakery café."
        subHeading="Where smiles are served daily"
        description="Enjoy delicious pastries, warm breads, stunning cakes and expertly
            brewed drinks while feeling right at home."
      />
    </>
  );
}
