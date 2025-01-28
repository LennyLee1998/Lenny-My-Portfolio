"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  // 这里之所以使用hook, 是为了把null值从context里面排除掉,否则这里没办法进行结构, 因为null上面结构属性会报错
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      {/* 虽然外层元素设置为relative，使得其子元素（如设置为 absolute 或 fixed 的元素）可以相对于这个外层元素定位，但这不会改变 fixed 元素本身的行为。fixed 元素依然是相对于整个窗口定位的。 */}
      <motion.div
        className="fixed left-1/2 top-0 rounded-none w-full h-[4.5rem] border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:w-[36rem] sm:h-[3.25rem]  sm:top-6 sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        // 表示元素的初始状态
        //这个x可以替代translate, 去掉即可
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        // The position is incorrect because there is overlapping in the transition
        // 元素在动画结束时
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      {/* h-[initial]: 内容的高度,也就是有种grow的感觉 */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ol className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500  sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => {
            return (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {/* 用户的动作: click => 
                 1.url变化 & scroll => href & id
                 2.btn颜色变化 => activeSection*/}
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    { "text-gray-950 dark:text-gray-200 ": activeSection === link.name }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ol>
      </nav>
    </header>
  );
}
