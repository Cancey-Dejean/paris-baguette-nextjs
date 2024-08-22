import Image from "next/image";
import Container from "@/components/ui/container";
import ImageTextRow from "@/components/ImageTextRow";
import { rowItemsLo } from "@/lib/dummyData";
import { ButtonItem, ImageTextRowItem } from "@/types";

export default function ImageTextStack({
  mainImage = " https://dummyimage.com/1170x1170.png/faf5f1/171b60",
  mainImageAlt = "Main image",
  rowItems,
}: {
  mainImage: string;
  mainImageAlt?: string;
  rowItems: ImageTextRowItem[];
}) {
  return (
    <section>
      <Container size="contained" className="flex items-center gap-16">
        <div className="group relative size-[585px] shrink-0 overflow-hidden rounded-[30px]">
          <Image
            src={mainImage}
            alt={mainImageAlt}
            className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
            fill
          />
        </div>

        {rowItems && (
          <div className="grow">
            {rowItems.map(
              ({ image, imageAlt, title, description, buttons }) => (
                <ImageTextRow
                  key={title}
                  image={image}
                  imageAlt={imageAlt}
                  title={title}
                  description={description}
                  buttons={buttons}
                />
              ),
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
