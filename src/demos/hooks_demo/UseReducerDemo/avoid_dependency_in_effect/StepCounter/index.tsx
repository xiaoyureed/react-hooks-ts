import ActionButton from "antd/lib/modal/ActionButton";
import React, { useEffect, useReducer, useState } from "react";

const StepCounterBad: React.FC = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const I = setInterval(() => {
      setCount((prev) => prev + step);
    }, 1000);
    return () => {
      clearInterval(I);
    };
  }, [step]); //step 申明到 useEffect 依赖中，导致 setInterval 被频繁实例化
  // 使用 useReducer 解决
  return (
    <>
      <h2>count: {count}</h2>
    </>
  );
};

interface IState {
  count: number;
  step: number;
}
interface IAction {
  type: string;
}
const StepCounter: React.FC = () => {
  const [state, dispatch] = useReducer(
    (prevSate: IState, action: IAction) => {
      switch (action.type) {
        case "click":
          return {
            ...prevSate,
            count: prevSate.count + prevSate.step,
          };
        default:
          throw new Error("unsupported type");
      }
    },
    {
      count: 0,
      step: 0,
    }
  );

  useEffect(() => {
    const I = setInterval(() => {
      dispatch({ type: "click" });
    }, 1000);
    return () => {
      clearInterval(I);
    };
  }, []);// dispatch 被 react 保证了不可变, 无需作为依赖传入
          // 同时, 这里避免了传入 count, step, 绕过依赖了, setInterval 只会实例化一次

  return (
    <>
      <h2>count: {state.count}</h2>
    </>
  );
};

export default StepCounter;
