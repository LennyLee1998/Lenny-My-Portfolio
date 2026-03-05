"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* heading title */}
      <SectionHeading>About me</SectionHeading>

      {/* paragraph */}
      {/* paragraph */}
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-[550]">Architecture</span>, I discovered my
        passion for programming and made the decision to transition into IT. I
        taught myself{" "}
        <span className="font-medium">full-stack web development</span> and
        successfully transitioned into a frontend engineer role at a financial
        IT company in China. <span className="italic">My core stack</span> is{" "}
        <span className="font-medium">
          React, TypeScript, Ant Design, and Redux
        </span>
        . I have hands-on experience building financial systems, including RBAC
        permission management, reusable component libraries, and large-scale
        data optimization. I am always looking to{" "}
        <span className="font-medium">learn new technologies</span> and
        currently seeking a{" "}
        <span className="font-medium">full-time position</span> in
        Japan.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        tech blogs and working on side projects to explore{" "}
        <span className="font-medium">new technologies.</span>
      </p>
    </motion.section>
  );
}
