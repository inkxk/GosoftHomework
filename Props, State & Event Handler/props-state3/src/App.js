import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import "./App.css";
import Card from "./Card";


function App() {
  const [colorNumber, setColorNumber] = useState([]);
  const [decks, setDecks] = useState(["red", "pink", "green", "red", "blue", "purple", "blue", "purple", "pink", "green",]);

  const shuffle = (decks) => {
    let m = decks.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [decks[m], decks[i]] = [decks[i], decks[m]];
    }
    setDecks([...decks]);
  };

  const handleShuffle = () => {
    shuffle(decks);    
  };

  const alertColor = (e) => {
    alert(e.target.getAttribute('color'));
  }


  return (
    <div>
      <div className="card-wrap" id="cardContainer">
        {/* loop card */}
        {decks.map((deck) => {
          return <Card background={deck} onClick={alertColor} />;
        })}
      </div>
      <div className="text-center">
        <button onClick={handleShuffle}>new deck</button>
      </div>
    </div>
  );
}

export default App;
