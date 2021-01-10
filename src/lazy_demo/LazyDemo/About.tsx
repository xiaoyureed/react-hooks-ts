import React, { useEffect, useMemo } from "react";

const waitOneSecond = async () => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
      console.log("resolve");
      
    }, 1000);
  });
  console.log("wait end.");
  
};

const About: React.FC = () => {
  waitOneSecond();
  return <>about.</>;
};

export default About;
