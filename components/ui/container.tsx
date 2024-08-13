import { cn } from "@/lib/utils";
import React from "react";

const containerSizes = {
  base: "max-w-[1314px]",
  contained: "max-w-[1170px]",
};

export default function Container({
  size = "base",
  children,
  className,
}: {
  size?: "base" | "contained";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full", containerSizes[size], className)}>
      {children}
    </div>
  );
}
