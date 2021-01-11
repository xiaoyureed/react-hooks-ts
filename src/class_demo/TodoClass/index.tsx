import React, { ChangeEvent } from "react";
import withTimer from "../hoc/withTimer";

interface IState {
  todos: Array<string>;
  input: string;
}

class TodoClass extends React.PureComponent<any, IState> {
  // 默认值
  // static defaultProps = {
  //   // ...
  // }

  // 方法 1: 
  // readonly state: IState = {
  //   todos: [],
  //   input: "",
  // };
  // 简写:
  // readonly state = {} as IState

  // 方法 2:
  constructor(props:any) {
    super(props);
    this.state = {
      todos: [],
      input: "",
    };
  }

  handleAdd = () => {
    if (!this.state.input) return;
    this.setState((old) => {
      return {
        input: "",
        todos: [...old.todos, old.input],
      };
    });
  };

  // FormEvent<HTMLInputElement> also ok
  handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    this.setState(old => {
      return {
        ...old,
        input: ev.target.value,
      };
    });
  }

  // 这种形式 error
  // 还需要 bind(this), 可在 constructor 中 bind
  // handleInputChange(ev: ChangeEvent) {
  //   ev.preventDefault();
  //   this.setState((old) => {
  //     return { ...old, input: ev.target.nodeValue };
  //   });
  // }

  render() {
    return (
      <>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.input}
          />{" "}
          <button onClick={this.handleAdd}>add</button>
          <p>{this.props.time.toLocaleString()}</p>
        </div>
      </>
    );
  }
}

export default withTimer(TodoClass);
