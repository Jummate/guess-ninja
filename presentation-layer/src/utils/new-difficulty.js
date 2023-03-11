export const computeNewDifficulty = (difficulty, noOfPlayer, count) => {
  const difficultyOptions = ["Easy", "Medium", "Hard"];
  const optionLength = difficultyOptions.length;
  let index = difficultyOptions.indexOf(difficulty);
  let newDifficulty = difficultyOptions[++index % optionLength];

  let newNumOfPlayer =
    Number(count) % optionLength === 0 ? ++noOfPlayer % 4 : noOfPlayer % 4;

  newNumOfPlayer = newNumOfPlayer < 1 ? 1 : newNumOfPlayer;

  return { newDifficulty, newNumOfPlayer };
};
