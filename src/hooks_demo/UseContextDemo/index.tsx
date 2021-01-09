import React, { createContext, useContext } from "react";

interface IStoreContext {
  people: string[];
}

const defaultStore: IStoreContext = {
  people: ["tom", "jerry"],
};

// init an context
// 必须是一个对象, 不能是数组
const StoreContext = createContext<IStoreContext>(defaultStore);

const UseContextDemo: React.FC = () => {
  return (
    <StoreContext.Provider value={defaultStore}>
      <MiddleTest />
    </StoreContext.Provider>
  );
};

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
