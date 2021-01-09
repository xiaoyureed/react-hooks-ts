import React, { useMemo, useState } from "react";

const UseMemoDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const memoText = useMemo(
    () => {
      console.log("memo function");
      return `now: ${Date.now()}`;
    },
    [Math.floor(count / 5)]// 每 增加 5, memo 中的 function 执行一次
  );
  return (
    <>
      <p>count: {count}</p>
      <p>{memoText}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default UseMemoDemo;
