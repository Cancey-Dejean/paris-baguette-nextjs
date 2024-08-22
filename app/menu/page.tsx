import Hero from "@/components/Hero";
import SeasonalCollection from "@/components/SeasonalCollection";
import Rewards from "@/components/Rewards";
import ImageTextStack from "@/components/ImageTextStack";
import Video from "@/components/Video";
import { cardItemsHi, rowItemsHi } from "@/lib/dummyData";
import SearchBar from "@/components/SearchBar";

export default function Page() {
  return (
    <>
      <Hero
        headline="Menu"
        subHeading="Joy baked into every bite."
        mainImage="/images/hero.jpg"
      />
      <SearchBar />
    </>
  );
}
