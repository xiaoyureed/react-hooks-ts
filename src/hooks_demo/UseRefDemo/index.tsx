import React, { useRef } from "react";

const UseRefDemo: React.FC = () => {
  // 需要指定 HTMLInputElement, 才不报错
  const refInput = useRef<HTMLInputElement>(null); // 不传初始值, 后面通过 ref 指定
  return (
    <>
      <h2>focus</h2>
      <form>
        {/* 无关, 测试 label 不同写法 */}
        <label>
          <input type="radio" name="gender" />male
        </label>
        <label>
          <input type="radio" name="gender" />female
        </label>
        <br/>


        <label htmlFor="name">name:</label>
        <input ref={refInput} id="name" type="text" />
        <button
          onClick={(ev) => {
            ev.preventDefault();
            refInput.current?.focus();
          }}
        >
          focus
        </button>
      </form>
    </>
  );
};

export default UseRefDemo;
