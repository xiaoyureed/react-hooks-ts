import React, { useEffect, useRef, useState } from "react";
import { DesktopLayout, MobileLayout } from "../InnerWidth";

const HooksAndResize1: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const threshold = 700;
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // window.addEventListener("resize", handleResize)
    //or
    window.onresize = handleResize;
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width < threshold ? <MobileLayout /> : <DesktopLayout />;
};

// 可以抽取出一个自定义 hook
// 但是有个问题:
// 响应式布局影响的是多个组件，如果在多处使用useViewport，这将重复执行函数, 浪费性能
const useViewWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.onresize = handleResize;
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  return width;
}
//更精简了
const HooksAndResize: React.FC = () => {
  const width = useViewWidth();
  const threshold = 700;
  return width < threshold ? <MobileLayout /> : <DesktopLayout />;
};


export default HooksAndResize;
