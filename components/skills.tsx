"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    // stagger animation
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      className="mb-28 scroll-mt-28 max-w-[53rem] text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white px-5 py-3 border border-black/[0.1] rounded-xl"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
