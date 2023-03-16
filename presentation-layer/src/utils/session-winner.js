export const getSessionWinner = (currentGame) => {
  let maxScore = Number.MIN_SAFE_INTEGER;
  const tempObj = {};
  const tempObj2 = {};

  currentGame.getPlayersInvolved().forEach((player) => {
    let playerScore = player.getPlayerScore();
    let playerName = player.getPlayerName().toString().toUpperCase();
    if (tempObj.hasOwnProperty(playerScore)) {
      tempObj[playerScore].push(playerName);
      tempObj2[playerScore].push(player);
    } else {
      tempObj[playerScore] = [playerName];
      tempObj2[playerScore] = [player];
    }

    maxScore = playerScore > maxScore ? playerScore : maxScore;
  });

  return {
    maxScore,
    winningPlayers: tempObj[maxScore],
    winningPlayersWithProps: tempObj2[maxScore],
  };
};
