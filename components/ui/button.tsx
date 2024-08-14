import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-pbBold items-center justify-center whitespace-nowrap ring-offset-blue transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-transparent rounded-[25px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary border-primary text-white hover:bg-white hover:bg-white hover:text-primary hover:border-primary",
        secondary:
          "bg-secondary text-blue border-secondary hover:bg-primary hover:text-white hover:border-primary",
        tertiary:
          "bg-tertiary text-primary  hover:bg-primary hover:text-white hover:border-primary",
        "outline-light": "border-white text-white hover:bg-secondary",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "px-7 py-2.5 text-xl",
        sm: "px-5 py-1.5 text-sm",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
