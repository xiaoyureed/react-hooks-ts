import { count } from "console";
import React from "react";

interface IProps {
  msg?: string;
}
// type Props = {
//     msg?: string;
// };

// declare state with a interface
interface IState {
  count: number;
}

// generic params <Iprops, state>
export default class Hello extends React.Component<IProps, IState> {
  public constructor(props: IProps | Readonly<IProps>) {
    super(props);
    // 方法 1
    this.state = {
      count: 0,
    };

    // bind this for customized method
    this.clickHandler = this.clickHandler.bind(this);
  }

  //   implement state (方法 2)
  // public readonly state: Readonly<IState> = {
  //   count: 0,
  // };

  public clickHandler() {
    this.setState((state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    });
  }

  public render() {
    return (
      <>
        <h2>{this.props.msg}</h2>
        <p>count: {this.state.count}</p>
        <button onClick={this.clickHandler}>+</button>
        <Message onPClick={console.log} />
      </>
    );
  }
}


type MessageProps = {
  onPClick: (msg: string) => void;
};
const Message: React.FC<MessageProps> = ({onPClick}) => {
  const clickPHandler = () => {
    onPClick("from son");
  };

  return (
    <>
      <p onClick={clickPHandler}>click me</p>
    </>
  );
};


