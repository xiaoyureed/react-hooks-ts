import React, { useEffect } from "react";

const DefaultPropsGood: React.FC<{ type?: { a: number } }> = ({ type }) => {
  useEffect(() => {
    console.log("type =", type);// 不会重复打印了, 说明每次 re render, type 默认值都是固定的, 没有重新创建默认值
  }, [type]);
  return <>good;</>;
};

DefaultPropsGood.defaultProps = {
  type: { a: 1 },
};

export default DefaultPropsGood;
