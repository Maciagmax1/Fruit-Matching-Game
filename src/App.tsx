import React, { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Card from "./models/Card";

const cardImages = [
  { src: "/assets/apple.png" },
  { src: "/assets/blueberries.png" },
  { src: "/assets/grapes.png" },
  { src: "/assets/lemon.png" },
  { src: "/assets/watermelon.png" },
  { src: "/assets/pineapple.png" },
];

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards: Card[] = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>Logo Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <CardContainer cards={cards} />
    </div>
  );
}

export default App;
