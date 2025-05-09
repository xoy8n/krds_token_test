import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-normal transition-colors disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-ring/30",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-[var(--color-primitive-light-primary-60)] active:bg-[var(--color-primitive-light-primary-70)]",
        secondary:
          "bg-secondary text-secondary-foreground border border-primary hover:bg-[var(--color-primitive-light-primary-10)] active:bg-[var(--color-primitive-light-primary-20)] disabled:border-transparent",
        tertiary:
          "border border-[var(--color-primitive-light-gray-60)] text-[var(--color-primitive-light-gray-90)] bg-transparent hover:bg-[var(--color-primitive-light-gray-5)] active:bg-[var(--color-primitive-light-gray-10)] disabled:border-transparent",
        link: "underline-offset-4 hover:underline disabled:bg-transparent disabled:text-muted-foreground",
      },
      size: {
        xlarge:
          "h-16 px-6 text-lg gap-1 rounded-lg [&_svg:not([class*='size-'])]:size-5",
        large:
          "h-14 px-5 text-lg gap-1 rounded-lg [&_svg:not([class*='size-'])]:size-5",
        medium:
          "h-12 px-4 text-base gap-1 rounded-md [&_svg:not([class*='size-'])]:size-4",
        small:
          "h-10 px-3 text-sm gap-1 rounded-md [&_svg:not([class*='size-'])]:size-4",
        xsmall:
          "h-8 px-2.5 text-xs gap-0.5 rounded [&_svg:not([class*='size-'])]:size-3.5",
        icon: "size-10 rounded-md [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
