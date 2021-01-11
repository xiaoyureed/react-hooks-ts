import React from "react";
// don't need this anymore
// import { Todo } from "./types";
import styles from "./Item.module.css";


const Item: React.FC<{
  todo: Todo;
  toggle: Toggle;
}> = ({ todo, toggle }) => {
  return (
    <li>
      <label className={todo.complete ? styles.complete : undefined}>
        {/* not defaultChecked */}
        {/* onChange: you have to transport todo param */}
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggle(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default Item;
