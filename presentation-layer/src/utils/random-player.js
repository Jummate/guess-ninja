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

// export const generateRandomPlayers = (arrayOfPlayers, subArrayOfPlayers) => {
//   // console.log(arrayOfPlayers);
//   // console.log(subArrayOfPlayers);
//   const availablePlayers = difference(arrayOfPlayers, subArrayOfPlayers);
//   // console.log(availablePlayers);
//   const randomIndex = generateRandomNum(0, availablePlayers.length);
//   return availablePlayers[randomIndex];
// };

export const generateRandomPlayers = (arrayOfPlayers) =>
  [...arrayOfPlayers].sort(() => Math.random() - 0.5);
