import React, { useState, useEffect } from "react";
import { newGame } from "./serviceCommunication";
import Player from "./Players";

const winText = "You Win!";
const loseText = "You Lose!";

export default function GameWrapper() {
  const [gameId, setGameId] = useState("");
  const [houseValue, setHouseValue] = useState(0);
  const [playerValue, setPlayerValue] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  async function startGame() {
    setGameId(await newGame(gameId));
  }

  useEffect(() => {
    if (playerValue > 21) {
      setGameOver(true);
    }
  }, [playerValue]);

  useEffect(() => {
    if (gameOver) {
      if (playerValue > 21) {
        alert(loseText);
      } else if (playerValue < houseValue) {
        alert(loseText);
      } else if (playerValue === houseValue) {
        alert(loseText);
      } else {
        alert(winText);
      }
    }
  }, [gameOver, playerValue, houseValue]);

  return (
    <div>
      {gameId ? (
        <div>
          <Player
            gameId={gameId}
            playerType="house"
            setPointValue={setHouseValue}
          />
          <Player
            gameId={gameId}
            playerType="player"
            setPointValue={setPlayerValue}
            setGameOver={setGameOver}
          />
        </div>
      ) : (
        <button onClick={() => startGame()}>Start New Game</button>
      )}
    </div>
  );
}
