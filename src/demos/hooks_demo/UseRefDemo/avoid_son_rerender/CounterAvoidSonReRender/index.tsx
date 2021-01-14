import React, { useEffect, useRef, useState } from "react";

const Son: React.FC<{ data: { a: number } }> = (props) => {
  useEffect(() => {
    console.log("data =", props.data);
  }, [props.data]);
  return <>Son;</>;
};

const CounterAvoidSonReRender: React.FC = () => {
  const [count, reRender] = useState(0);
  const refDate = useRef({ a: 1 });
  return (
    <>
      <Son data={refDate.current} />
      <button onClick={() => reRender((prev) => prev + 1)}>add</button>
    </>
  );
};

export default CounterAvoidSonReRender;
