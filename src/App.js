import "./App.css";
import { useState } from "react";

const App = () => {
  const [p1Total, setp1Total] = useState(0);
  const [p2Total, setp2Total] = useState(0);
  const [dice, setdice] = useState(0);
  const [turn, setturn] = useState(true);
  const [message, setmessage] = useState("");

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setdice(randomNumber);
    if (randomNumber === 1) {
      const subtractNumber = Math.floor(Math.random() * 9) + 1;
      setmessage(
        `You rolled 1, ${subtractNumber} has been subtracted from your score.`
      );
      if (turn) {
        setp1Total(p1Total - subtractNumber);
        setturn(!turn);
      } else {
        setp2Total(p2Total - subtractNumber);
        setturn(!turn);
      }
    } else if (randomNumber === 6) {
      setmessage(`You rolled 6, go again!`);
      if (turn) {
        setp1Total(p1Total + randomNumber);
        setturn(turn);
      } else {
        setp2Total(p2Total + randomNumber);
        setturn(turn);
      }
    } else {
      if (turn) {
        setp1Total(p1Total + randomNumber);
        setturn(!turn);
      } else {
        setp2Total(p2Total + randomNumber);
        setturn(!turn);
      }
    }
  };

  console.log(message);

  return (
    <div className="App">
      <div className="turn">
        It is {turn ? "Player 1's turn" : "Player 2's turn"}
      </div>
      <button className="dice-btn" onClick={getRandomNumber}>
        Roll dice
      </button>
      <div className="dice">Dice: {dice}</div>
      <div className="score">
        <div className="p1">Player 1: {p1Total}</div>
        <div className="p2">Player 2: {p2Total}</div>
      </div>
      <div className="message">{message}</div>
      <div className="winner">
        {p1Total >= 30
          ? `Player 1 is the Winner!`
          : p2Total >= 30
          ? `Player 2 is the Winner!`
          : ""}
      </div>
    </div>
  );
};

export default App;
