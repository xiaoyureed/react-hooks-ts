import React, { useMemo } from "react";
import ss from "./index.module.css";

const STYLES = ["btnPrimary", "btnOutline"];

const SIZES = ["btnMedium", "btnLarge"];

const Button: React.FC<{
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  buttonStyle?: string;
  buttonSize?: string;
}> = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  // check button style and size
  const { checkedStyle, checkedSize } = useMemo(() => {
    let checkedStyle;
    let checkedSize;
    if (STYLES.includes(buttonStyle!)) {
      checkedStyle = buttonStyle;
    } else {
      checkedStyle = STYLES[0];
    }
    if (SIZES.includes(buttonSize!)) {
      checkedSize = buttonSize;
    } else {
      checkedSize = SIZES[0];
    }
    return { checkedStyle, checkedSize };
  }, [buttonSize, buttonStyle]);
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${ss.btn} 
      // 通过字符串获取样式
        ${ss[checkedStyle!]} 
        ${ss[checkedSize!]}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonStyle: STYLES[0],
  buttonSize: SIZES[0],
  type: "button",
};

export default Button;
