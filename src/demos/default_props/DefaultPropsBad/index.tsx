import React, { useEffect } from "react";

const DefaultPropsBad: React.FC<{ type?: { a: number } }> = ({
  type = { a: 1 },
}) => {
  useEffect(() => {
    console.log("type =", type);//每次渲染都会打印出日志，也就意味着每次渲染时，type 的引用是不同的。
                                //因为 没有命中的 props 在每次渲染默认值都不同, 即都是新创建的
  }, [type]);
  return <>hahsh</>;
};

export default DefaultPropsBad;
