import { generateRandomNum } from "./random-number";

const difference = (first, second) => {
  const tempArr = first.reduce(
    (temp, player) =>
      second.filter((playerInsecond) => playerInsecond.isEqualTo(player)).length
        ? temp
        : [...temp, player],
    []
  );

  return tempArr;
};

export const generateRandomPlayers = (arrayOfPlayers, subArrayOfPlayers) => {
  const availablePlayers = difference(arrayOfPlayers, subArrayOfPlayers);
  const randomIndex = generateRandomNum(0, availablePlayers.length);
  return availablePlayers[randomIndex];
};
