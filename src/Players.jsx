import React, { useState, useEffect } from "react";
import { dealCards } from "./serviceCommunication";
import { getPointTotal } from "./utils";
import styles from "./Players.css";

export default function Players({
  gameId,
  playerType,
  setPointValue,
  setGameOver
}) {
  const [cardList, setCardList] = useState([]);

  async function getNewCards(number) {
    setCardList(await dealCards(gameId, number, playerType));
  }

  //useEffect complains if we use the function defined outside of the useEffect
  useEffect(() => {
    async function getNewCards() {
      setCardList(await dealCards(gameId, 2, playerType));
    }
    getNewCards();
  }, []);

  useEffect(() => {
    if (cardList.length) {
      setPointValue(getPointTotal(cardList));
    }
  }, [cardList]);

  return (
    <React.Fragment>
      <span>{playerType}</span>
      <div className={styles.cardList}>
        {cardList.map(card => (
          <img src={card.image} alt={card.code} key={card.code} />
        ))}
        {playerType === "player" && cardList.length && (
          <div>
            <button onClick={() => getNewCards(1)}>HIT</button>
            <button onClick={() => setGameOver(true)}>STAND</button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
