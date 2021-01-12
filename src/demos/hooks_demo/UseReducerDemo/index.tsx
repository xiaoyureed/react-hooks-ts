import React, { useReducer } from "react";
import styles from "./index.module.css";

interface IState {
  count: number;
}
interface IDic<T> {
  [key: string]: T;
}
interface IAction {
  type: string;
  payload?: IDic<any>;// 最佳实践 , 暂时没用到
}

const INCREASE = "increase";
const DECREASE = "decrease";
const ACTIONS = {
  INCREASE,
  DECREASE,
};

const reducer = (state: IState, { type, payload }: IAction) => {
  switch (type) {
    case ACTIONS.INCREASE: {
      return { ...state, count: state.count + 1 };
    }
    case ACTIONS.DECREASE: {
      return { ...state, count: state.count - 1 };
    }
    default:
      // return state;
      throw new Error("unknown type");
  }
};

const UseReducerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h2>count: {state.count}</h2>
      <button
        className={styles.btn}
        onClick={() => dispatch({ type: ACTIONS.INCREASE })}
      >
        +
      </button>
      <button
        className={styles.btn}
        onClick={() => dispatch({ type: ACTIONS.DECREASE })}
      >
        -
      </button>
    </>
  );
};

export default UseReducerDemo;
