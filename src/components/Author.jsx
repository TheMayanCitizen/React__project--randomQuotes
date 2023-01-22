import React from "react";

const Author = ({ quoteInfo, color, colorMarks }) => {
  return (
    <div className="App__box--author">
      <i
        className="bx bxs-chevrons-right App__icon"
        style={{ color: colorMarks }}
      ></i>
      <span className="App__author" style={{ color: color }}>
        {quoteInfo}
      </span>
      <i
        className="bx bxs-chevrons-left App__icon"
        style={{ color: colorMarks }}
      ></i>
    </div>
  );
};

export default Author;
