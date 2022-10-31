import { createReadStream } from "fs";
import Card from "../models/Card";
import "./CardContainer.css";

interface Props {
  cards: Card[];
}

const CardContainer = ({ cards }: Props) => {
  return (
    <div className="CardContainer">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <img className="front" src={card.src} alt="card front"></img>
            <img src="" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
