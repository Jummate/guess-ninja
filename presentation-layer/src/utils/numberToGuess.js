import { generateRangeOfNumbers } from "./rangeOfNumbers";
import { calculateRandomNumbersLength } from "./randomNumberFormula";
import { generateRandomNum } from "./random-number";

export const generateNumberToGuess = (
  numOfAttempt,
  numOfPlayers,
  difficulty
) => {
  const numberArray = generateRangeOfNumbers(
    calculateRandomNumbersLength(numOfAttempt, numOfPlayers, difficulty)
  );

  let start = numberArray[0];
  let end = numberArray.at(-1);
  let randomIndex = generateRandomNum(0, numberArray.length - 1);
  let numberToGuess = numberArray[randomIndex];
  console.log(randomIndex);
  console.log(numberToGuess);

  return {
    start,
    end,
    numberToGuess,
    numberArray,
  };
};
