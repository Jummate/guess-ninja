export const getSessionWinner = (currentGame) => {
  let maxScore = Number.MIN_SAFE_INTEGER;
  // let winningPlayer = "";
  const tempObj = {};

  currentGame.getPlayersInvolved().forEach((player) => {
    let playerScore = player.getPlayerScore();
    let playerName = player.getPlayerName().toString().toUpperCase();
    if (tempObj.hasOwnProperty(playerScore)) {
      tempObj[playerScore].push(playerName);
    } else {
      tempObj[playerScore] = [playerName];
    }

    maxScore = playerScore > maxScore ? playerScore : maxScore;
    // if (player.getPlayerScore() > maxScore) {
    //   maxScore = player.getPlayerScore();
    //   winningPlayer = player.getPlayerName().toString().toUpperCase();
    // }
  });

  return { maxScore, winningPlayers: tempObj[maxScore] };
  // return { winningPlayer, maxScore };
};
