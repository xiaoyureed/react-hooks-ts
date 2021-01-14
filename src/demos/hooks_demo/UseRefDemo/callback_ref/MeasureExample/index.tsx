import React, { useCallback, useState } from "react";

const MeasureExample: React.FC = () => {
  const [height, setHeight] = useState(0);

  // 在 绑定 dom 到 ref 时, 可以做一些处理
  const measuredRef = useCallback((node:HTMLHeadingElement) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
};

export default MeasureExample;
