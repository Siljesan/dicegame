import "./App.css";
import { useState } from "react";

const App = () => {
  const [p1Total, setp1Total] = useState(0);
  const [p2Total, setp2Total] = useState(0);
  const [dice, setdice] = useState(0);
  const [turn, setturn] = useState(true);

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    setdice(randomNumber);
    if (turn) {
      setp1Total(p1Total + randomNumber);
      setturn(!turn);
    } else {
      setp2Total(p2Total + randomNumber);
      setturn(!turn);
    }
  };

  console.log(dice);

  return (
    <div className="App">
      <div>It is {turn ? "Player 1's turn" : "Player 2's turn"}</div>
      <button className="p1-btn" onClick={getRandomNumber}>
        Roll dice
      </button>
      <div className="dice">Dice: {dice}</div>
      <div className="p1">Player 1: {p1Total}</div>
      <div className="p2">Player 2: {p2Total}</div>
    </div>
  );
};

export default App;
