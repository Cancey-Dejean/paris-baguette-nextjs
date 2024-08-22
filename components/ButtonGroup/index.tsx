import { ButtonItem } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ButtonGroup({
  buttons = [],
}: {
  buttons?: ButtonItem[];
}) {
  return (
    <div className="flex items-center gap-5">
      {buttons.map(({ label, url, newTab, variant, size }, index) => (
        <Button asChild variant={variant} size={size} key={index}>
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
  );
}
