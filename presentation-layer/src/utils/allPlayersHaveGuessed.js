export const checkAllPlayersHaveGuessed = (
  currentGame,
  playersAlreadyGuessed
) => {
  return (
    currentGame.getCountOfPlayersInvolved() === playersAlreadyGuessed.length
  );
};
