import React from "react";
import ss from "./index.module.css";

const LayoutHeaderFooter: React.FC = () => {
  return (
    <div className={ss.container}>
      <div className={ss.header}>header</div>
      <div className={ss.middle}>middle</div>
      <div className={ss.footer}>footer</div>
    </div>
  );
};

export default LayoutHeaderFooter;
