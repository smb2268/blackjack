const faceCards = ["JACK", "QUEEN", "KING"];
const ace = "ACE";
export type cardType = {
  image: String,
  value: String,
  suit: String,
  code: String
};

export function sortCardArray(firstCard: string, secondCard: string): number {
  if (firstCard === ace) {
    return 1;
  } else if (secondCard === ace) {
    return -1;
  } else {
    return 0;
  }
}

export function accumulatePoints(currentTotal: number, currentValue: string): number {
  if (currentValue === ace) {
    if (currentTotal <= 10) {
      return currentTotal + 11;
    } else {
      return currentTotal + 1;
    }
  } else if (faceCards.includes(currentValue)) {
    return currentTotal + 10;
  } else {
    return currentTotal + parseInt(currentValue, 10);
  }
}

export function getPointTotal(cardList: Array<cardType>): number {
  const valueArray = cardList.map(card => card.value);
  valueArray.sort(sortCardArray);
  return valueArray.reduce(accumulatePoints, 0);
}
