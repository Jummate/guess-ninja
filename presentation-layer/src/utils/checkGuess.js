export const checkAndConfirmGuess = (target, player) => {
  return Number(target) === Number(player?.getPlayerCurrentGuess());
};
