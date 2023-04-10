import { difficultyValue } from "./difficultyValue";
export const calculateRandomNumbersLength = (
  numOfPlayers,
  numOfAttempt,
  difficulty
) => {
  numOfAttempt = Number(numOfAttempt);
  numOfPlayers = Number(numOfPlayers);

  return (
    (numOfAttempt - 1) * numOfPlayers +
    numOfPlayers +
    difficultyValue[difficulty.toLowerCase()]
  );
};
