import React, { useEffect, useState } from "react";

const UseEffectDemo: React.FC = () => {


  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setCount((count) => count + 1);
  }, []); // only execute one time, equal to "componentDidMount"


  useEffect(() => {
    console.log("componentDidUpdate...");
  });// equal to "componentDidUpdate"



  const [count2, setCount2] = useState(2);
  useEffect(() => {
    console.log("count2 updated..., count2 == " + count2);
  }, [count2]); // exec depending on count2


  return (
    <>
      <h2>count: {count} (input == [])</h2>
      <h2>count2: {count2}</h2>
      <button onClick={() => setCount2(count => count +1)}>click to add count2</button>
    </>
  );
};

export default UseEffectDemo;
