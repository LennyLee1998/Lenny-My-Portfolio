import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

import type { SectionName } from "./types";

// type useSectionInViewProps = {
//   sectionName: SectionName;
//   threshold?: number;
// };

//简化了传统的 scroll 事件监听逻辑
// 用户的动作: scroll =>
// 1.url
// 2.btn颜色 activeSection 这里在实现功能2
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  // threshold 表示一个阈值，用于确定元素的可见性。这一参数用于设置元素在视口中需要多少比例（0 到 1 之间的值）可见时才被认为是“在视图中”。
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // synchronize the state with external system
  // disable other method for like one second
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
