export const calculateRandomNumbersLength = (
  numOfAttempt,
  numOfPlayers,
  difficulty
) => {
  const difficultyValue = { easy: 1, moderate: 3, hard: 5 };
  return (
    (numOfAttempt - 1) * numOfPlayers +
    numOfPlayers +
    difficultyValue[difficulty.toLowerCase()]
  );
};
