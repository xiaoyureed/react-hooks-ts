import React, { useEffect } from "react";
import { useCountAdd } from "../../UseStateDemo/CountAddHook";

export const useInterval = (callback: () => void, interval: number) => {
  useEffect(() => {
    // 每次组件渲染完毕后执行
    let I = setInterval(callback, interval)

    return () => {
      // 第二次渲染开始前执行这里
      // 即每次组件卸载后执行
      clearInterval(I);
    }
  }, [callback, interval]);
};

const IntervalHook: React.FC = () => {
  const [count, addCount] = useCountAdd(0);
  useInterval(addCount, 1000);
  return <>
    <h2>count: {count}</h2>
  </>;
};

export default IntervalHook;
