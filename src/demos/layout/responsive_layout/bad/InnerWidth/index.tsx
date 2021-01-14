import React from "react";

export const MobileLayout: React.FC = () => {
  return (
    <div
      style={{
        width: "400px",
      }}
    >
      MobileLayout
    </div>
  );
};

export const DesktopLayout: React.FC = () => {
  return (
    <div
      style={{
        width: "700px",
      }}
    >
      DesktopLayout
    </div>
  );
};

/**
 * 当调整窗口大小时，未解决宽度值的更新问题
 */
const InnerWidth: React.FC = () => {
  const width = window.innerWidth;
  const threshold = 700;
  return width < threshold ? <MobileLayout /> : <DesktopLayout />;
};

export default InnerWidth;
