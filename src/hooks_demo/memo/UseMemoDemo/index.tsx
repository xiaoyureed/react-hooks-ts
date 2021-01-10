import React, { useMemo, useState } from "react";
import styles from "./index.module.css";

const UseMemoDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  // 缓存一个函数逻辑, 可以有返回值
  const memoText = useMemo(
    () => {
      console.log("memo function");
      return `now: ${Date.now()}`;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
