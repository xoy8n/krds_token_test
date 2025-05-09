"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer group inline-flex h-5 w-8 shrink-0 cursor-pointer items-center rounded-full transition-colors",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-[var(--color-primitive-light-gray-50)]",
        "outline-none focus-visible:ring-4 focus-visible:ring-ring/30",
        "disabled:cursor-not-allowed disabled:opacity-50 data-[disabled]:bg-muted",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none relative block size-4 rounded-full bg-background ring-0 transition-transform",
          "data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[14px]",
          "flex items-center justify-center"
        )}
      >
        <img
          src="/icons/check-icon.svg"
          alt="Checked"
          className={cn(
            "absolute h-2.5 w-2.5 opacity-0 transition-opacity duration-200",
            "group-data-[state=checked]:opacity-100"
          )}
        />
        <img
          src="/icons/x-icon.svg"
          alt="Unchecked"
          className={cn(
            "absolute h-2.5 w-2.5 opacity-0 transition-opacity duration-200",
            "group-data-[state=unchecked]:opacity-100"
          )}
        />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
