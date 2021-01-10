import React, { useCallback, useState } from "react";
import Control from "./Control";
import Todos from "./Todos";
import { Todo } from "./types";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const add = useCallback((newTodo: Todo) => {
    setTodos((todos) => [...todos, newTodo]);
  }, []);

  const remove = useCallback((id: number) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }, []);

  const toggle = useCallback((id: number) => {
    setTodos((todos) => {
      return todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      );
    });
  }, []);

  return (
    <>
      <Control add={add} />
      <Todos todos={todos} remove={remove} toggle={toggle} />
    </>
  );
};

export default TodoApp;
