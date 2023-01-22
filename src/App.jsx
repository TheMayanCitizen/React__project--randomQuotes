import { useState } from "react";
import "./App.css";
import Author from "./components/Author";
import Button from "./components/Button";
import Quote from "./components/Quote";
import quotesList from "./json/quotes.json";

function App() {
  /* We create a function to pick a quote from the quotes.json file */
  const randomQuote = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  /* This function allows me to create a random hexadecimal color */
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    return hex;
  };

  /* We need to save the random quote and the respective colors in variables, in order to send the value to the children as props*/
  const [quoteInfo, setQuoteInfo] = useState(randomQuote(quotesList));
  const [colorTxt, setColorTxt] = useState(getRandomColor());
  const [colorMarks, setColorMarks] = useState(getRandomColor());

  /* Lastly, we declare this function which will determine what happens when the user clicks on the button */
  const clickHandler = () => {
    setQuoteInfo(randomQuote(quotesList));
    setColorTxt(getRandomColor());
    setColorMarks(getRandomColor());
  };

  return (
    <div className="App" style={{ backgroundColor: colorTxt }}>
      <article className="App__box">
        <Quote
          quoteInfo={quoteInfo.quote}
          color={colorTxt}
          colorMarks={colorMarks}
        />
        <Author
          quoteInfo={quoteInfo.author}
          color={colorTxt}
          colorMarks={colorMarks}
        />
        <Button
          clickHandler={clickHandler}
          color={colorTxt}
          colorMarks={colorMarks}
        />
      </article>
    </div>
  );
}

export default App;
