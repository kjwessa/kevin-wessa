import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@root/utilities/cn";

const gutterVariants = cva("", {
  variants: {
    leftGutter: {
      true: "pl-12",
      false: "",
    },
    rightGutter: {
      true: "pr-12",
      false: "",
    },
    disableMobile: {
      true: "md:px-0",
      false: "",
    },
  },
  defaultVariants: {
    leftGutter: true,
    rightGutter: true,
    disableMobile: false,
  },
});

type GutterProps = VariantProps<typeof gutterVariants> & {
  children: React.ReactNode;
  className?: string;
  dataTheme?: string;
  ref?: React.MutableRefObject<any>;
};

export const Gutter: React.FC<GutterProps> = ({
  children,
  className,
  dataTheme,
  disableMobile,
  leftGutter = true,
  rightGutter = true,
  ref: refFromProps,
}) => {
  return (
    <div
      className={cn(
        gutterVariants({ leftGutter, rightGutter, disableMobile }),
        className,
      )}
      data-theme={dataTheme}
      ref={refFromProps || null}
      style={{ "--gutter-h": "3rem" } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
