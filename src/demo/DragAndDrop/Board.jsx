import React from "react";

export const Board = (props) => {
  const drop = (e) => {
    e.preventDefault();
    //https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver}>
      {props.children}
    </div>
  );
};
