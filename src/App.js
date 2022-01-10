import "./App.css";
import { useState } from "react";

const App = () => {
  const [p1Total, setp1Total] = useState(0);
  const [p2Total, setp2Total] = useState(0);
  const [dice, setdice] = useState(0);

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    setdice(randomNumber);
    setp1Total(p1Total + randomNumber);
  };

  console.log(dice);

  return (
    <div className="App">
      <button className="p1-btn" onClick={getRandomNumber}>
        Roll dice
      </button>
      <div className="dice">Dice: {dice}</div>
      <div className="p1">Player 1: {p1Total}</div>
    </div>
  );
};

export default App;
