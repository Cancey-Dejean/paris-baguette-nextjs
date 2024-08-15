import { appStoreLinks } from "@/lib/dummyData";
import Link from "next/link";
import Image from "next/image";

export default function AppStore() {
  return (
    <div className="flex items-center gap-5">
      {appStoreLinks.map(({ image, imageAlt, url, width, height }, index) => (
        <Link key={index} href={url} target="_blank" rel="nofollow noreferrer">
          <Image
            src={image}
            alt={imageAlt || "No alt set"}
            width={width || 132}
            height={height || 40}
          />
        </Link>
      ))}
    </div>
  );
}
