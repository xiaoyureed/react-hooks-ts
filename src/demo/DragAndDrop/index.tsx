import React from "react";
import { Board } from "./Board";
import { Card } from "./Card";
/**
 * https://www.youtube.com/watch?v=-MfTv5VRM0A&t=396s
 */
export const DragAndDrop = () => {
  return (
    <div className="flexbox">
      <Board id="board-1" className="board">
        <Card id="card-1" className="card" draggable="true">
          <p>Card one</p>
        </Card>
      </Board>
      <Board id="board-2" className="board">
        <Card id="card-2" className="card" draggable="true">
          <p>Card two</p>
        </Card>
      </Board>
    </div>
  );
};
