import React, { useMemo, useState } from "react";
import styles from "./index.module.css";

const UseMemoDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  // 缓存一个函数逻辑, 返回值可选
  const memoText = useMemo(
    () => {
      console.log("memo function");
  // 若返回值是一个函数, 相当于 useCallback(返回值函数,[])
      return `now: ${Date.now()}`;
    },
    [Math.floor(count / 5)] // 每 增加 5, memo 中的 function 执行一次
  );
  return (
    <>
      <p>count: {count}</p>
      <p>{memoText}</p>
      <button
        className={styles.btn}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        className={styles.btn}
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
