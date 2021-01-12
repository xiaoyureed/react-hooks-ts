import React, { useState } from "react";

// 需要分会元组
// 方法 1: 自己定义 元组类型
// 方法 2: 返回值 转型 as const
export const useCountAdd: (init: number, step?: number) => [number, () => void] = (
  init: number,
  step = 1
) => {
  const [count, setCount] = useState(init);
  return [
    count,
    () => {
      // setCount((count) => count + (step ? step : 1));
      setCount((count) => count + step);
    },
  ];
  // ] as const;
};

const CountAddHook: React.FC = () => {
  const [count, addCount] = useCountAdd(0);
  // const [count, addCount] = useCountAdd(0, 10);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => addCount()}>+</button>
    </>
  );
};

export default CountAddHook;
