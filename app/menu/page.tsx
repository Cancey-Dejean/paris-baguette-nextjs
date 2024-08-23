import FeaturedCollection from "@/components/FeaturedCollection";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { cardItemsLo } from "@/lib/dummyData";
import { twMerge } from "tailwind-merge";

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
        className="bg-[length:1200px_auto] pb-20"
        style={{
          backgroundImage: `url("/images/bg-beige-texture.jpg")`,
        }}
      >
        <FeaturedCollection
          columnSize="three"
          title="Cakes"
          id="cakes"
          className="pb-0"
          description="From classic favorites like Red Velvet or Chocolate to unique flavors such as Blueberry Chiffon or Cappuccino Cake, we offer something for every taste and occasion. Our certified bakers and cakers create beautiful, delicious cakes you’ll be proud to share with family and friends."
          cardItems={cardItemsLo}
        />

        <FeaturedCollection
          columnSize="three"
          title="Cake Slices"
          id="cake-slices"
          className="pb-0"
          description="Enjoy a taste of our delectable cakes as a slice. Choose from an assortment of flavors including fresh fruit, rich chocolate and tart varieties. Enjoy them on-the-go or stop in and share a slice with a friend."
          cardItems={cardItemsLo}
        />

        <FeaturedCollection
          columnSize="three"
          title="Sweets & Pastries"
          id="sweets-pastries"
          className="pb-0"
          description="Satisfy your cravings with our wide range of pastries, from croissants to flaky delights. Each pastry is freshly baked and served with a smile."
          cardItems={cardItemsLo}
        />

        <FeaturedCollection
          columnSize="three"
          title="Donuts"
          id="donuts"
          className="pb-0"
          description="Our donuts are the perfect sweet treat for any time of day. Each of our donuts is crafted to perfection, from traditional to unique creations like Mochi Donuts and Croissant Donuts. Indulge in the sweet, fluffy goodness that makes our donuts irresistible."
          cardItems={cardItemsLo}
        />

        <FeaturedCollection
          columnSize="three"
          title="Savories"
          id="savories"
          className="pb-0"
          description="Our selection of savory baked goods are perfect for a quick meal or a tasty snack. Our menu includes quiches, pizzettas, stuffed croissants, and more. Each item is freshly baked to satisfy your cravings. Doughy, flaky, cheesy…what’s not to love?"
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Shareable Breads"
          id="shareable-breads"
          className="pb-0"
          description="From classic baguettes to sweet and savory loaves, our fresh breads are always baked to perfection."
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Breakfast Sandwiches"
          id="breakfast-sandwiches"
          className="pb-0"
          description="Our gourmet breakfast sandwiches are made fresh and feature classic fillings, including eggs, cheese, bacon, and more. Pair one with a specialty coffee to kickstart your day."
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Salads, Sandwiches & Wraps"
          id="salads-sandwiches-wraps"
          className="pb-0"
          description="Our salads and sandwiches are perfect for a delicious lunch or dinner on the go. Choose from a variety of fresh ingredients and flavorful combinations."
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Hot Beverages"
          id="hot-beverages"
          className="pb-0"
          description="Cozy up with our selection of hot beverages, including rich Lavazza coffees, creamy lattes, and soothing teas. Each drink is individually crafted by our skilled baristas, who create a flavorful experience with every sip."
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Iced Beverages"
          id="iced-beverages"
          className="pb-0"
          description="Cool down with our refreshing iced beverages. From fruity refreshers to cold brew coffees and iced teas, our selection offers a variety of options to quench your thirst. Take a break with a cold, delicious drink, perfect for any time of day."
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Frozen Beverages"
          id="frozen-beverages"
          className="pb-0"
          description="Beat the heat with our frozen beverages. From frappes to smoothies these frosty treats are blended to perfection."
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Bottled Beverages"
          id="bottled-beverages"
          className="pb-0"
          description="Stay refreshed with our selection of bottled beverages. From classic sodas and waters to juices and specialty teas, we offer a variety of options to keep you hydrated and satisfied."
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Roll Cakes & Packaged Treats"
          id="roll-cakes-packaged-treats"
          className="pb-0"
          description="Treat yourself to our roll cakes and packaged treats, perfect for a sweet indulgence. Each item is baked with care and packaged for your convenience."
          cardItems={cardItemsLo}
        />
        <FeaturedCollection
          columnSize="three"
          title="Grab & Go"
          id="grab-go"
          className="pb-0"
          description="Our grab-and-go options are convenient for a quick snack or a sweet treat on the move. Choose from cookies, brownies, muffins, and more, all made with the highest-quality ingredients."
          cardItems={cardItemsLo}
        />
      </div>
    </>
  );
}
