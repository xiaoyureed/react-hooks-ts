import React, { useCallback, useState } from "react";

const TimeoutPrint: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(
    () => {
      return () => {
        setCount(prev => prev + 1);// 异步, count 不会马上变化, 所以 下面的闭包中捕获的 count 不是修改后的 count
        setTimeout(() => {
          console.log(count);// 依次打印 0 1 2

          // 为什么出现这种现象?
          //每次 click, 当前这个闭包捕获的 count 值就是 0 1 2, 然后等待三秒打印
        }, 3000);
      };
    },
    [count],
  );
  return (
    <>
      <h2>clicked {count} times</h2>
      <button onClick={handleClick()}>click</button>
    </>
  );
};

export default TimeoutPrint;
