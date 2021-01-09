import React, { useState } from "react";
import { InputForm } from "./InputForm";
import List from "./List";

const initTodos: Array<Todo> = [
  { text: "walk the dog.", complete: true },
  { text: "write an app", complete: false },
];

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState(initTodos);

  const toggle: Toggle = (tobeToggle) => {
    const newTodos: Array<Todo> = todos.map((todo) => {
      if (todo === tobeToggle) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const add: Add = (text) =>
    text.trim() !== "" && setTodos([...todos, { text, complete: false }]);

  return (
    <React.Fragment>
      <List todos={todos} toggle={toggle} />
      <InputForm add={add} />
    </React.Fragment>
  );
};

export default TodoApp;

