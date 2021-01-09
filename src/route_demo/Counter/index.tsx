import React, { useState } from "react";
import Button from "./Button";

const Counter: React.FC = () => {
  // 这里加上泛型, 可以防止粗心类型错误
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>{count}</h2>
      <Button onClick={() => setCount(count => count + 1)}>+</Button> 
    </>
  );
};

export default Counter;
