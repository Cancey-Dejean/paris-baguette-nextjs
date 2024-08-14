import Container from "@/components/ui/container";

export default function Video() {
  return (
    <section
      className="bg-cover"
      style={{
        backgroundImage: "url('/images/bg-beige-texture.jpg')",
      }}
    >
      <Container size="compact" className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="font-pbSpecial mb-12 text-[60px] leading-none text-primary">
            Welcome to your neighborhood bakery café.
          </h2>

          <h3 className="font-pbSpecial text-3xl uppercase text-primary">
            Where smiles are served daily
          </h3>

          <p className="mt-5 text-2xl">
            Enjoy delicious pastries, warm breads, stunning cakes and expertly
            brewed drinks while feeling right at home.
          </p>
        </div>

        <video
          className="w-full rounded-[30px]"
          src="/videos/PB-2024-Menuboard.mp4"
          controls
        />
      </Container>
    </section>
  );
}
