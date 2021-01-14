import React, { useCallback, useEffect, useRef, useState } from "react";

const TimeoutPrintUseRef: React.FC = () => {
  // 使用 ref 代替 state
  const refCount = useRef<number>(0);
  const handleClick = useCallback(() => {
    return () => {
      refCount.current++;
      setTimeout(() => {
        console.log(refCount.current);// 3 3 3
      }, 3000);
    };
  }, []);
  return (
    <>
      <h2>clicked {refCount.current} times</h2>
      <button onClick={handleClick()}>click</button>
    </>
  );
};

// 若仍然希望使用 state, 可以这么做:
const Alternative: React.FC = () => {
  const [count, setCount] = useState(0);

  const refLatestCount = useRef<number|null>(null);
  // 同步了 count 的最新值
  useEffect(() => {
    refLatestCount.current = count;
  }, [count]);


  const handleClick = useCallback(() => {
    return () => {
      setCount(prev => prev + 1);
      setTimeout(() => {
        console.log(refLatestCount.current);// 3 3 3
      }, 3000);
    };
  }, []);
  return (
    <>
      <h2>clicked {count} times</h2>
      <button onClick={handleClick()}>click</button>
    </>
  );
};

// 可以考虑抽取为自定义 hooks, 获取最新的 state:
function useCurrentValue(value: number) {
  const ref = useRef(0);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}

export default TimeoutPrintUseRef;
