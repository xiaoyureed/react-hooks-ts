import React from "react";
import ss from './index.module.css';

const LayoutSider: React.FC = () => {
  return (
    <>
      <div className={ss.container}>
        <div className={ss.header}>header</div>
        <div className={ss.sider}>sider</div>
        <div className={ss.content}>content</div>
        <div className={ss.footer}>footer</div>
      </div>
    </>
  );
};

export default LayoutSider;
