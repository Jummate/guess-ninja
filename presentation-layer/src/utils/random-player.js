export const generateRandomPlayers = (arrayOfPlayers) =>
  [...arrayOfPlayers].sort(() => Math.random() - 0.5);
