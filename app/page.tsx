import Hero from "@/components/Hero";
import SeasonalCollection from "@/components/SeasonalCollection";
import Rewards from "@/components/Rewards";
import ImageTextStack from "@/components/ImageTextStack";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Hero />
      <SeasonalCollection />
      <Rewards />
      <ImageTextStack />
      <Video />
    </>
  );
}
