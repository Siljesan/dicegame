import "./App.css";
import { useState } from "react";

const App = () => {
  let p1;
  let p2;

  const randomNumber1 = () => {
    p1 = Math.floor(Math.random() * 6) + 1;
  };

  console.log(randomNumber1);

  const [p1Total, setp1Total] = useState(0);
  const [p2Total, setp2Total] = useState(0);

  return (
    <div className="App">
      <button className="p1-btn" onClick={randomNumber1}>
        Roll dice
      </button>
      <div className="p1-dice">{p1}</div>
    </div>
  );
};

export default App;
