import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { CardProduct, ProductCardIcons } from "@/types/types";

const cardIcons: ProductCardIcons = {
  cart: "/images/icon-checkout.svg",
  circleArrow: "/images/icon-detail.svg",
};

export default function ProductCard({
  image = "https://dummyimage.com/1170x580.png/171b60/dddddd",
  imageAlt = "Product Image",
  title = "Product Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  links, // Default to CardLinks if not provided
}: CardProduct) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-t-[25px] bg-[#faf5f1]"
      style={{
        backgroundImage: "url('/images/bg-beige-texture.jpg')",
      }}
    >
      <div className="group relative h-[290px] w-full min-w-[366px] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw,  33vw"
          fill
        />
      </div>

      <div className="p-6 text-center text-primary">
        <h3 className="font-pbSpecial mb-5 text-[28px] leading-none">
          {title}
        </h3>

        <p className="line-clamp-4">{description}</p>
      </div>

      {links && (
        <div className={twMerge("mt-auto flex bg-[rgba(0,0,0,0.05)]")}>
          {links.map(({ url, label, icon }, index) => (
            <div
              key={index}
              className={twMerge(
                "flex grow items-center justify-center gap-1.5 p-4 first:border-r-[1px] first:border-r-primary",
              )}
            >
              <Image
                src={cardIcons[icon]}
                width={23}
                height={27}
                alt={label}
                className="h-[27px] w-[23px]"
              />
              <Link
                href={url || "/"}
                className="font-pbBold text-sm leading-none text-primary"
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
