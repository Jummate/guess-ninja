import { generateRandomNum } from './random-number';

const difference = (first, second) => {
  console.log('first', first);
  console.log('second', second);
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
  const randomIndex = generateRandomNum(0, availablePlayers.length - 1);
  console.log('randinde', randomIndex);
  console.log(availablePlayers);
  console.log(availablePlayers[randomIndex]);
  return availablePlayers[randomIndex];
};
