import React, { ReactElement } from "react";

const Comp: React.FC<{
  children: (name: string) => ReactElement;
}> = (props) => {
  return <>{props.children("hello")}</>;
};

const FunctionAsSonComponent: React.FC = () => {
  return (
    <Comp>
      {(name) => {
        return (
          <div>
            <p>func as son comp</p>
            <p>{name}</p>
          </div>
        );
      }}
    </Comp>
  );
};

export default FunctionAsSonComponent;
