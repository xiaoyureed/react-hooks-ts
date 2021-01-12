import React, { createContext, useContext } from "react";

interface IStoreContext {
  people: string[];
}

const defaultStore: IStoreContext = {
  people: ["tom", "jerry"],
};

// init an context
// 除了这里可以设置初始值 , 还有 Provider 那里可以设置 (两者之一设置了, 则 usecontext 即可使用)
// 这里提供一个设置接口主要是为了测试时使用(因为测试时可能没有 provider 包装)
const StoreContext = createContext<IStoreContext>(defaultStore);

const UseContextDemo: React.FC = () => {
  return (
    <StoreContext.Provider value={defaultStore}>
      <MiddleTest />
    </StoreContext.Provider>
  );
};

// 中间层, 证明 通过 context 可以跨越中间层传递 props
const MiddleTest = () => <Item />;

const Item: React.FC = () => {
  const store = useContext(StoreContext);
  return (
    <>
      {store.people.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </>
  );
};

export default UseContextDemo;
