export const getScore = (allPlayers) => {
  return (
    allPlayers &&
    allPlayers.map((player) => {
      return {
        ID: player.getPlayerId(),
        name: player.getPlayerName(),
        score: player.getPlayerScore(),
        wins: player.getPlayerNoOfWins(),
        plays: player.getPlayerNoOfPlays(),
      };
    })
  );
};

export const columns = [
  {
    field: "name",
    header: "Name",
  },
  {
    field: "plays",
    header: "Plays",
  },

  {
    field: "wins",
    header: "Wins",
  },

  {
    field: "score",
    header: "Score",
  },
];

// module.export = { columns };
