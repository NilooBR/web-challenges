import { Card } from "../../components/Card/card.js";
import { cards } from "../../utils/cards.js";

export function CardList() {
    const cardList = document.createElement("section");
    cardList.classList.add("card-list");
  
    cards.forEach((card) => {
      const cardElement = Card(card);
      cardList.append(cardElement);
    });
  
    return cardList;
  }