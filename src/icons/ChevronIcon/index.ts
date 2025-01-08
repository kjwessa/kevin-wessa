import * as React from "react";
import { cn } from "@root/utilities/cn.js";
import { cva, type VariantProps } from "class-variance-authority";

import { IconProps } from "../types.js";

const chevronVariants = cva(
  "overflow-visible fill-none stroke-current [vector-effect:non-scaling-stroke]",
  {
    variants: {
      size: {
        "extra-small": "w-1 h-1",
        small: "w-2 h-2",
        medium: "w-3 h-3",
        large: "w-4 h-4",
        full: "w-full h-full",
      },
      bold: {
        true: "stroke-2",
        false: "stroke-1",
      },
    },
    defaultVariants: {
      size: "medium",
      bold: false,
    },
  },
);

export interface ChevronIconProps extends Omit<IconProps, "bold" | "size"> {
  size?: VariantProps<typeof chevronVariants>["size"];
  bold?: VariantProps<typeof chevronVariants>["bold"];
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({
  rotation,
  size,
  className,
  bold,
}) => {
  return React.createElement(
    "svg",
    {
      className: cn(chevronVariants({ size, bold }), className),
      viewBox: "0 0 14 27",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
      },
    },
    React.createElement("path", {
      d: "M1.40625 0.738037L14.1682 13.4999L1.40625 26.2618",
    }),
  );
};
