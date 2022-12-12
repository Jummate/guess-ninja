import { generateRandomNum } from './random-number';

export const generateRangeOfNumbers = (arrayLength) => {
  let startingNum = generateRandomNum();
  const numArray = [];
  for (let x = 0; x < arrayLength; x++) {
    numArray.push(startingNum + x);
  }
  return numArray;
};
