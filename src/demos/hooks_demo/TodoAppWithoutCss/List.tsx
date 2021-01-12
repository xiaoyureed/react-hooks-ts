import React from "react";
import Item from "./Item";

interface Props {
  todos: Todo[];
  toggle: Toggle;
}

const List: React.FC<Props> = ({ todos, toggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Item key={todo.text} todo={todo} toggle={toggle} />
      ))}
    </ul>
  );
};

export default List;
