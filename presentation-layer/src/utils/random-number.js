export const generateRandomNum = (lowerBoundary = 1, upperBoundary = 50) => {
  return Math.floor(Math.random() * upperBoundary + lowerBoundary);
};
