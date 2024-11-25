import React from "react";

interface GrainProps {
  children: React.ReactNode;
}

export function Grain({ children }: GrainProps) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/grain.gif')] bg-repeat opacity-[0.04]"
        style={{
          zIndex: 9999,
          backgroundSize: "auto",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
