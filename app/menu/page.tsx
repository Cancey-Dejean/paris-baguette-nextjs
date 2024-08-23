import FeaturedCollection from "@/components/FeaturedCollection";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { cardItemsLo } from "@/lib/dummyData";

export default function MenuPage() {
  return (
    <>
      <Hero
        size="short"
        headline="Menu"
        subHeading="Joy baked into every bite."
        mainImage="/images/hero.jpg"
      />
      <SearchBar />
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/bg-beige-texture.jpg")`,
        }}
      >
        <FeaturedCollection
          title="Cakes"
          description="From classic favorites like Red Velvet or Chocolate to unique flavors such as Blueberry Chiffon or Cappuccino Cake, we offer something for every taste and occasion. Our certified bakers and cakers create beautiful, delicious cakes you’ll be proud to share with family and friends."
          cardItems={cardItemsLo}
        />
      </div>
    </>
  );
}
