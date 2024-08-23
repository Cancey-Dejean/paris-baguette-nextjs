import Breadcrumb from "@/components/ui/breadcrumb";
import Container from "@/components/ui/container";
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
    <section>
      <Container>
        <Breadcrumb />
        <div className="grid grid-cols-2 gap-20">
          <div>Image</div>
          <div>
            <h1>{params.slug}</h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
