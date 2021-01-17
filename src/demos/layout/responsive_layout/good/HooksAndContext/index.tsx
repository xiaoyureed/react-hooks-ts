import React, { createContext, useContext, useEffect, useState } from "react";
import { DesktopLayout, MobileLayout } from "../../bad/InnerWidth";

interface IViewportContext {
  height: number;
  width: number;
}

const ViewportContext = createContext<IViewportContext>({} as IViewportContext);

export const ViewportContextProvider: React.FC = ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  const { height, width } = useContext(ViewportContext);
  return { width, height };
};

const HooksAndContext: React.FC<{ widthThreshold: number }> = ({
  widthThreshold,
}) => {
  const { width } = useViewport();
  // const threshold = 700;
  return width < widthThreshold ? <MobileLayout /> : <DesktopLayout />;
};

const Wrapper = () => (
  <ViewportContextProvider>
    <HooksAndContext widthThreshold={700} />
  </ViewportContextProvider>
);

export default Wrapper;
