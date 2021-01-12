import React, { useState } from 'react';

const UseStateDemo: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </>
  );
};

export default UseStateDemo;
