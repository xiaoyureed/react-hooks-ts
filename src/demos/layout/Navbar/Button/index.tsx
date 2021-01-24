import React, { useMemo } from "react";
import ss from "./index.module.css";

const STYLES = ["btnPrimary", "btnOutline"];

const SIZES = ["btnMedium", "btnLarge"];

const Button: React.FC<{
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  buttonStyle: string;
  buttonSize: string;
}> = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  // check button style and size
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${ss.btn} 
      // 通过字符串获取样式
        ${ss[STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]]} 
        ${ss[SIZES.includes(buttonSize) ? buttonSize : SIZES[0]]}`}
    >
      {children}
    </button>
  );
};

// Button.defaultProps = {
//   buttonStyle: STYLES[0],
//   buttonSize: SIZES[0],
//   type: "button"
// };

export default Button;
