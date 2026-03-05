"use client";
import Image from "next/image";
import React from "react";
import portrait from "@/public/portrait.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  // 1. 构思功能,给小鹿加上音效,之后再加上动画
  // const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  // // 在组件挂载时创建音频对象
  // useEffect(() => {
  //   // 创建音频对象但不自动加载，等到用户交互时再加载
  //   const deerSound = new Audio("/deer-sound.mp3");
  //   deerSound.preload = "none";
  //   setAudio(deerSound);

  //   // 清理函数
  //   return () => {
  //     if (deerSound) {
  //       deerSound.pause();
  //       deerSound.src = "";
  //     }
  //   };
  // }, []);
  // // 处理鼠标悬停
  // const handleMouseEnter = useCallback(() => {
  //   if (audio) {
  //     // 重置音频播放位置并播放
  //     audio.currentTime = 0;
  //     audio.play().catch((err) => console.log("Audio play failed:", err));
  //   }
  // }, [audio]);

  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      {/* portrait */}
      <div
        className=" flex items-center justify-center"
        // onMouseEnter={handleMouseEnter}
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={portrait}
              alt="Lenny portrait"
              quality={100}
              className=" h-24 w-24 object-cover border-[0.35rem] border-white  rounded-full shadow-xl "
            />
            <motion.span
              className="text-4xl absolute bottom-0 -right-2 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              🦌
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* personal intro */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Lenny.</span> I'm a{" "}
        <span className="font-bold">full-stack developer. </span>
        {/* with{" "}
        <span className="font-bold">8 years</span> of experience.  */}
        I enjoy building <span className="italic">sites & apps</span>. My focus
        is <span className="underline">React (Next.js) & Spring Boot. </span>
        <span>
          I love
          <span className="font-bold">
            {" "}
            turning ideas into reality with code!
          </span>
        </span>
      </motion.h1>

      {/* personal icon links (contact, cv, linkdin, github) */}
      <motion.div
        className="flex justify-center items-center flex-col sm:flex-row gap-2 text-lg px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 text-white px-7 py-3 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group flex items-center gap-2 rounded-full px-7 py-3 bg-white  cursor-pointer outline-none focus:scale-110 hover:scale-110  active:scale-105 transition borderBlack dark:bg-white/10"
          href="/resume-1.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="flex items-center  rounded-full  p-4 bg-white text-gray-700 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://lenny-blog.vercel.app/"
          target="_blank"
        >
          <Image
            src="/blog.png"
            alt="Lenny's blog favicon"
            width={24}
            height={24}
            // className=""
          />
        </a>

        <a
          className="flex items-center  rounded-full  p-4 bg-white  text-gray-700 text-[1.35rem] cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/lennylee1998"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
