import React, { useCallback, useEffect, useRef, useState } from "react";

const useCountLimit = (limit: number, initCount = 0) => {
  const [count, setCount] = useState(initCount);
  // 存储 handle
  // todo 暂时设为 any
  const refInterval = useRef<any>(null);

  const initInterval = useCallback(() => {
    refInterval.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, [refInterval]);

  // 初始化定时器
  useEffect(() => {
    initInterval();
  }, [initInterval]);

  // 每次 re render 检查 count 是否到达 limit
  useEffect(() => {
    // reach the threshold then clear interval 
    if (count >= limit) {
      clearInterval(refInterval.current);
    }
  });

  // click btn then reset count to 0
  const resetCount = useCallback(() => {
    return () => {// avoid recreate arrow function
      setCount((prev) => {
        if (prev < limit) {
          return 0;
        }
        initInterval()
        return 0;
      });
    };
  }, [initInterval, limit]);

  return {
    count,
    resetCount,
  };
};

const CountLimit: React.FC = () => {
  const { count, resetCount } = useCountLimit(5);
  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={resetCount()}>reset</button>
    </>
  );
};

export default CountLimit;
