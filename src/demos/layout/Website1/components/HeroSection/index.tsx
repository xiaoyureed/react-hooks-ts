import React from "react";
import ss from "./index.module.css";
// https://github.com/facebook/create-react-app/issues/6822#issuecomment-483079845
import coffee from "./coffee.mp4";
import Button from "../../../Navbar/Button";

const HeroSection = () => {
  return (
    <div className={ss.container}>
      <video className={ss.video} src={coffee} autoPlay loop muted />
      <h1>adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className={ss.buttons}>
        <Button buttonStyle="btnOutline" buttonSize="btnLarge">
          get started
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
