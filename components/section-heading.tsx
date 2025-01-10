import React from "react";
interface SectionHeadingProps {
  // Represents all of the things React can render.
  children: React.ReactNode;
}
// heading title component
export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-center text-3xl font-medium capitalize mb-8">{children}</h2>;
}
