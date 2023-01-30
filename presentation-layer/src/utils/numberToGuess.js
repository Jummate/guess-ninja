import { generateRangeOfNumbers } from "./rangeOfNumbers";
import { calculateRandomNumbersLength } from "./randomNumberFormula";
import { generateRandomNum } from "./random-number";

export const generateNumberToGuess = (
  numOfPlayers = 1,
  numOfAttempt,
  difficulty
) => {
  const numberArray = generateRangeOfNumbers(
    calculateRandomNumbersLength(numOfPlayers, numOfAttempt, difficulty)
  );

  let start = numberArray[0];

  let end = !Array.prototype.at
    ? numberArray[numberArray.length - 1]
    : numberArray.at(-1);

  let randomIndex = generateRandomNum(0, numberArray.length - 1);
  let numberToGuess = numberArray[randomIndex];

  return {
    start,
    end,
    numberToGuess,
    numberArray,
  };
};
