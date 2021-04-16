import get from "lodash/get";

//start game, return deckId
export function newGame(deckId) {
  const deckParam = deckId ? deckId : "new";
  const fetchUrl = `https://deckofcardsapi.com/api/deck/${deckParam}/shuffle/`;
  return fetch(fetchUrl, { method: "GET" })
    .then(response => response.json())
    .then(data => {
      return data.deck_id;
    });
}

//deal cards, add them to player pile, return player card array
export function dealCards(deckId, cardNumber, player) {
  const fetchUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardNumber}`;
  return fetch(fetchUrl, { method: "GET" })
    .then(response => response.json())
    .then(data => {
      return addToPile(deckId, data.cards, player);
    });
}

function addToPile(deckId, cards, player) {
  const cardList = [];
  cards.forEach(card => cardList.push(card.code));
  const fetchUrl = `https://deckofcardsapi.com/api/deck/${deckId}/pile/${player}/add/?cards=${cardList.join(
    ","
  )}`;
  return fetch(fetchUrl, { method: "GET" })
    .then(response => response.json())
    .then(() => {
      return getPlayerCards(deckId, player);
    });
}

function getPlayerCards(deckId, player) {
  const fetchUrl = `https://deckofcardsapi.com/api/deck/${deckId}/pile/${player}/list/`;
  return fetch(fetchUrl, { method: "GET" })
    .then(response => response.json())
    .then(data => {
      return get(data, `piles.${player}.cards`);
    });
}
