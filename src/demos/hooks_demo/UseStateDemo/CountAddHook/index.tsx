import React, { useState } from "react";

// 若想返回元组
// 方法 1: 自己定义 元组类型
// 方法 2: 返回值 转型 as const
// 也可返回一个对象 (更简单)
/**
 * 自定义 hook, 返回 count 和我们自定的累加器
 * @param init initial count
 * @param step step, default to 1
 */
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
