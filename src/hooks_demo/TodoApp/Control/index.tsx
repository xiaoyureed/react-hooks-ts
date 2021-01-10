import React, { useRef } from "react";
import styles from "./index.module.css";
import { Add } from "../types";

let todoId = 1;

type ControlProps = {
  add: Add;
};
const Control: React.FC<ControlProps> = ({ add }) => {
  const refInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    const text = refInput.current?.value.trim();
    if (text?.length === 0 || !text) {
      return;
    }
    add({
      id: todoId++,
      text,
      complete: false,
    });
    // refInput.current?.value = "";
  };
  return (
    <>
      <h1 className={styles.header}>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.todo}
          ref={refInput}
          type="text"
          placeholder="type your todo..."
        />
      </form>
    </>
  );
};

export default Control;
