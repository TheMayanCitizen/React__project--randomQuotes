import React from "react";

const Button = ({ clickHandler, color, colorMarks }) => {
  return (
    <button
      onClick={clickHandler}
      className="App__btn"
      style={{ backgroundColor: color }}
    >
      <i
        className="bx bx-right-arrow-alt App__icon--btn"
        style={{ color: colorMarks }}
      ></i>
    </button>
  );
};

export default Button;
