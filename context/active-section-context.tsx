"use client";

import React, { useState, createContext, useContext } from "react";

import type { SectionName } from "@/lib/types";

type ActiveSectionPropsType = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionPropsType) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  // keep track od this to disable the observer temporarily whem user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// 确保在使用上下文之前，提供了正确的上下文 Provider，从而避免在组件中出现未定义或 null 值的情况
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  // ActiveSectionContextProvider 组件的子组件中使用。如果 context 为 null，这通常意味着该 Hook 被错误地使用在了不在 ActiveSectionContextProvider 中的组件里。
  // 如果错误发生，就会抛出一个 Error，提示开发人员一定要在 ActiveSectionContextProvider 内部使用这个 Hook。
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }
  // 如果上下文正常被获取，Hook 会返回该上下文的值，以便在组件中使用。
  return context;
}
