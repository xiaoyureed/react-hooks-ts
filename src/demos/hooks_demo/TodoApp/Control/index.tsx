import React, { memo, useRef } from "react";
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

    // error
    // refInput.current?.value = "";
    // 需要判断一下, 不为空才能置为""
    if (refInput.current?.value) {
      refInput.current.value = "";
    }
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

export default memo(Control);
