import React from "react";
import { Remove, Todo, Toggle } from "../types";

type TodosProps = {
  todos: Array<Todo>;
  remove: Remove;
  toggle: Toggle;
};

const Todos: React.FC<TodosProps> = ({ todos, remove, toggle }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => {
                toggle(todo.id);
              }}
              checked={todo.complete}
            />
            <label>{todo.text}</label>
            <button
              onClick={() => {
                remove(todo.id);
              }}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
