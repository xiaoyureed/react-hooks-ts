import React, { memo } from "react";
import { Remove, Todo, Toggle } from "../types";
import styles from "./index.module.css";

type TodosProps = {
  todos: Array<Todo>;
  remove: Remove;
  toggle: Toggle;
};

const Todos: React.FC<TodosProps> = ({ todos, remove, toggle }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className={styles.item}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={() => {
                toggle(todo.id);
              }}
              checked={todo.complete}
            />
            <label
              className={`${styles.label} ${
                todo.complete ? styles.complete : ""
              }`}
            >
              {todo.text}
            </label>
            <button
              className={styles.btn}
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

export default memo(Todos);
