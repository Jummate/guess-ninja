export const calculateRandomNumbersLength = (
  numOfPlayers,
  numOfAttempt,
  difficulty
) => {
  const difficultyValue = { easy: 1, medium: 3, hard: 5 };
  numOfAttempt = Number(numOfAttempt);
  numOfPlayers = Number(numOfPlayers);

  return (
    (numOfAttempt - 1) * numOfPlayers +
    numOfPlayers +
    difficultyValue[difficulty.toLowerCase()]
  );
};
