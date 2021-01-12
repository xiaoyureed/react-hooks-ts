import React, { useRef, useState } from 'react';

const PrevDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  // 若希望 ref 可变, 加上 |null
  const refPrev = useRef<number|null>(null);
  return (
    <>
      <p>current: {count}</p>
      <p>prev: {refPrev.current}</p>
      <button onClick={() => {
        // 更新前先存储 prev
        refPrev.current = count;

        setCount(count => count + 1);
      }}>+</button>
      <button onClick={() => {
        refPrev.current = count;
        setCount(count => count - 1);
      }}>-</button>
    </>
  );
};

export default PrevDemo;
