import React from "react";
import styles from "./index.module.css";

type CounterButtonProps = {
  // 光标移动到 button 元素的 onClick 属性, 可以复制类型粘贴到这里
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
};

const Button: React.FC<CounterButtonProps> = (props) => {
  return (
    <>
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
