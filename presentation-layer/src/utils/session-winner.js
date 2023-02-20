export const getSessionWinner = (currentGame) => {
  let maxScore = 0;
  let winningPlayer = "";

  currentGame.getPlayersInvolved().forEach((player) => {
    if (player.getPlayerScore() > maxScore) {
      maxScore = player.getPlayerScore();
      winningPlayer = player.getPlayerName().toString().toUpperCase();
    }
  });

  return { winningPlayer, maxScore };
};
