import React, { memo, useCallback, useState } from "react";
import Control from "./Control";
import Todos from "./Todos";
import { Todo } from "./types";
import styles from './index.module.css';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  // 在 functional component 内的函数定义需要声明在 usecallback 内部
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
    <div className={styles.todoList}>
      <Control add={add} />
      <Todos todos={todos} remove={remove} toggle={toggle} />
    </div>
  );
};

// 优化
export default memo(TodoApp);
// export default TodoApp;
