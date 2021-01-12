import React, { useEffect } from "react";
import { useCountAdd } from "../../UseStateDemo/CountAddHook";

export const useInterval = (callback: () => void, interval: number) => {
  useEffect(() => {
    let I = setInterval(callback, interval)
    return () => {
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
