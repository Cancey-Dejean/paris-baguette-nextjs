import Link from "next/link";
import Image from "next/image";
import { ButtonItem } from "@/types";
import { Button } from "@/components/ui/button";

export default function ImageTextRow({
  image = "https://dummyimage.com/100x100.png/171b60/dddddd",
  imageAlt = "Icon image",
  title,
  description,
  buttons,
}: {
  title: string;
  image: string;
  imageAlt?: string;
  description: string;
  buttons?: ButtonItem[];
}) {
  return (
    <div className="[&>hr]:last:hidden">
      <div className="flex items-center gap-8">
        <Image
          src={image}
          alt={imageAlt}
          width={100}
          height={100}
          className="mb-5 shrink-0"
        />

        <div className="grow">
          <h3 className="mb-1.5 font-pbSpecial text-[32px] font-semibold leading-none text-primary">
            {title}
          </h3>

          <p className="line-clamp-2 text-lg leading-[1.2]">{description}</p>

          {buttons && buttons.length > 0 && (
            <div className="mt-5 flex items-center gap-5">
              {buttons.map(({ label, url, newTab, variant }) => (
                <Button asChild variant={variant} size="sm" key={label}>
                  <Link
                    href={url}
                    target={newTab ? "_blank" : "_self"}
                    rel={newTab ? "noopener noreferrer" : "noreferrer"}
                  >
                    {label || "Button"}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      <hr className="my-10 border-dotted" />
    </div>
  );
}
