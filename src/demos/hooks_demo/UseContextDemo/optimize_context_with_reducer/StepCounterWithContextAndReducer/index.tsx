import React, { createContext, useContext, useMemo, useReducer } from "react";

interface IStore {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

const StoreContext = createContext<IStore | undefined>(undefined);
const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "useStoreContext must be used within StoreContext.Provider"
    );
  }
  return context;
};

interface IState {
  count: number;
  step: number;
}
interface IAction {
  type: string;
}

const Count: React.FC = () => {
  const { dispatch, state } = useStoreContext();
  console.log("Count re render"); // 点击 step, 这里还是会打印
                                  // 所以 functional component 内的自定义逻辑/函数都应该包含在 usecallback 中才能避免重复的创建
  
  return useMemo(() => {
    console.log("Count in return usememo"); // 点击 step, 这里不打印
    
    return (
      <div>
        <h2>{state.count}</h2>
        <button
          onClick={() => {
            dispatch({ type: "add count" });
          }}
        >
          add count
        </button>
      </div>
    );
  }, [dispatch, state.count]);
};

const Step: React.FC = () => {
  const { dispatch, state } = useStoreContext();

  console.log("Step re render");
  
  return useMemo(() => {
    console.log("Step in return usememo");
    
    return (
      <div>
        <h2>{state.step}</h2>
        <button
          onClick={() => {
            dispatch({ type: "add step" });
          }}
        >
          add step
        </button>
      </div>
    );
  }, [dispatch, state.step]);
};

const StepCounterWithContextAndReducer: React.FC = () => {
  const [state, dispatch] = useReducer(
    (prev: IState, action: IAction) => {
      switch (action.type) {
        case "add count":
          return {
            ...prev,
            count: prev.count + 1,
          };
        case "add step":
          return {
            ...prev,
            step: prev.step + 1,
          };
        default:
          throw new Error("unsupported type");
      }
    },
    { count: 0, step: 0 }
  );
  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Count />
      <Step />
    </StoreContext.Provider>
  );
};

export default StepCounterWithContextAndReducer;
