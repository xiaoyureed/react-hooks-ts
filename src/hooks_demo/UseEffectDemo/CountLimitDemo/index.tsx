import React, { useEffect, useRef, useState } from 'react';

const useCountLimit = (limit: number, initCount=0) => {
  const [count, setCount] = useState(initCount);
  // 存储 handle
  // todo 暂时设为 any
  const refInterval = useRef<any>(null);

  useEffect(() => {
    refInterval.current = setInterval(() =>{
      setCount(c => c +1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= limit) {
      clearInterval(refInterval.current);
    }
  });

  return [count, setCount] as const;
};

const CountLimit: React.FC = () => {
  const [count, setCount] = useCountLimit(5);
  return (
    <>
      <h2>count: {count}</h2>
      {/* 重置为 0 */}
      {/* //TODO 考虑添加重置后, 计时器任然有效 */}
      <button onClick={() => {setCount(0)}}>reset</button>
    </>
  );
};

export default CountLimit;
