import React, { useCallback, useEffect, useRef, useState } from "react";

const CountDown: React.FC = () => {
  const [show, setShow] = useState(false);
  const refTimeId = useRef<NodeJS.Timeout | null>(null);
  const handleClick = useCallback(() => {
    return () => {
      refTimeId.current = setTimeout(() => {
        setShow(true);
      }, 1000);
    };
  }, []);
  useEffect(() => {
    return () => {
      if (refTimeId.current) {
        window.clearTimeout(refTimeId.current);
      }
    };
  }, []);
  return (
    <div>
      <button onClick={handleClick()}>show after 1 s</button>
      {show && <div>hahahaha</div>}
    </div>
  );
};

export default CountDown;
