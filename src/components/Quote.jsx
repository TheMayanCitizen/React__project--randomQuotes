import React from "react";

const Quote = ({ quoteInfo, color, colorMarks }) => {
  return (
    <div>
      <i
        className="bx bxs-quote-alt-left App__icon"
        style={{ color: colorMarks }}
      ></i>
      <span className="App__quote" style={{ color: color }}>
        {quoteInfo}
      </span>
      <i
        className="bx bxs-quote-alt-right App__icon"
        style={{ color: colorMarks }}
      ></i>
    </div>
  );
};

export default Quote;
