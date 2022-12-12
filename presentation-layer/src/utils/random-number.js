export const generateRandomNum = (lowerBoundary = 1, upperBoundary = 50) => {
  console.log(lowerBoundary, upperBoundary);
  return Math.floor(Math.random() * upperBoundary + lowerBoundary);
};
