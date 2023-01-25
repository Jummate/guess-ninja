export const getScore = (allPlayers) => {
  return (
    allPlayers &&
    allPlayers.map((player) => {
      return {
        ID: player.getPlayerId(),
        name: player.getPlayerName(),
        score: player.getPlayerScore(),
        wins: player.getPlayerNoOfWins(),
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
    field: "score",
    header: "Score",
  },
  {
    field: "wins",
    header: "Number Of Wins",
  },
];

// module.export = { columns };
