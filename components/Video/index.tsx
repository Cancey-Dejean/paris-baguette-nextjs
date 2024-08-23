import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

export default function Video({
  headline,
  subHeading,
  className,
  description,
  videoUrl,
  backgroundImage,
}: {
  headline: string;
  subHeading: string;
  className?: string;
  description?: string;
  videoUrl: string;
  backgroundImage?: string;
}) {
  return (
    <section
      className={cn("bg-cover bg-center bg-no-repeat", className)}
      style={{
        backgroundImage: `url(${backgroundImage || "/images/bg-beige-texture.jpg"})`,
      }}
    >
      <Container size="compact" className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="mb-12 font-pbSpecial text-[60px] leading-none text-primary">
            {headline}
          </h2>

          <h3 className="font-pbSpecial text-3xl uppercase text-primary">
            {subHeading}
          </h3>

          <p className="mt-5 line-clamp-2 text-2xl">{description}</p>
        </div>

        <video className="w-full rounded-[30px]" src={videoUrl} controls />
      </Container>
    </section>
  );
}
