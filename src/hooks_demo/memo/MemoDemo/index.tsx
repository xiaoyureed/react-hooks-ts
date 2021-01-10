import React, { memo, useState } from "react";

const MemoDemo: React.FC = () => {
  const [count, setCount] = useState <number>(0)
  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={() => {setCount(c => c + 1)}} >click</button>

      {/* 无优化 */}
      {/* <Son /> */}

      {/* 优化后 (不存在相关属性, 不 rerender) */}
      {/* <SonMemoed /> */}

      {/* 优化后 (存在相关属性, 会 rerender) */}
      <SonMemoed msg={`count: ${count}`} />
    </>
  );
};


const Son: React.FC<{msg?: string}> = ({msg}) => {
  // 验证 son 是否会重复 render
  console.log("son render...");
  
  return (
    <>
      {msg}
    </>
  );
};

// 此时 son 不会进行无关的 re render
// 类似 PureComponent
const SonMemoed = memo(Son);


export default MemoDemo;
