import Breadcrumb from "@/components/ui/breadcrumb";
import Container from "@/components/ui/container";
import HeaderLine from "@/components/ui/headerLine";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ProductPage({ params }: { params: { slug: string } }) {
  // const product = await getProductBySlug(params.slug);

  // if (!product) {
  //   notFound();
  // }
  return (
    <section
      className="bg-[length:1200px_auto]"
      style={{
        backgroundImage: `url("/images/bg-beige-texture.jpg")`,
      }}
    >
      <Container size="contained">
        <Breadcrumb className="mb-2.5" />
        <div className="divide-y divide-[#A9A28D]">
          <div className="grid grid-cols-2 gap-20">
            <div className="group overflow-hidden rounded-[30px]">
              <Image
                src="/images/main-product.jpg"
                alt="Product Image"
                width={1024}
                height={684}
                className="transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div className="">
              <div className="mb-10">
                <h1 className="mb-3 font-pbSpecial text-5xl">
                  Lemon Citrus Layer Cake
                </h1>
                <HeaderLine />
              </div>

              <div className="flex flex-col gap-7 text-primary">
                <p className="font-normal">
                  Four layers of vanilla sponge cake filled with lemon curd and
                  lemon soft cream, topped with lemon chocolates.
                </p>

                <p className="font-normal">Contains: Egg, Milk, Soy, Wheat</p>

                <p className="font-pbSpecial">420 Calories per serving</p>
              </div>
            </div>
          </div>

          <div className="mt-[100px] pt-16">
            <h2 className="mb-5 font-pbSpecial text-5xl">More Cakes</h2>

            <div className="grid grid-cols-4 gap-7">
              <div className="group flex flex-col items-center justify-center gap-2.5">
                <div className="group gap-2.5 overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/main-product.jpg"
                    alt="Product Image"
                    width={1024}
                    height={684}
                    className="transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-pbSpecial text-xl">Product Name</h3>
              </div>

              <div className="group flex flex-col items-center justify-center gap-2.5">
                <div className="group gap-2.5 overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/main-product.jpg"
                    alt="Product Image"
                    width={1024}
                    height={684}
                    className="transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-pbSpecial text-xl">Product Name</h3>
              </div>

              <div className="group flex flex-col items-center justify-center gap-2.5">
                <div className="group gap-2.5 overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/main-product.jpg"
                    alt="Product Image"
                    width={1024}
                    height={684}
                    className="transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-pbSpecial text-xl">Product Name</h3>
              </div>

              <div className="group flex flex-col items-center justify-center gap-2.5">
                <div className="group gap-2.5 overflow-hidden rounded-[30px]">
                  <Image
                    src="/images/main-product.jpg"
                    alt="Product Image"
                    width={1024}
                    height={684}
                    className="transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-pbSpecial text-xl">Product Name</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
