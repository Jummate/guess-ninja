export class Player {
  constructor(gameId, playerName) {
    this.gameId = gameId;
    this.playerId = Date.now();
    this.playerName = playerName;
    this.score = 0;
    this.noOfWins = 0;
    this.hasPlayed = false;
    this.currentGuess = null;
  }

  setGameId(newVlaue) {
    this.gameId = newVlaue;
  }
  getGameId() {
    return this.gameId;
  }

  setPlayerName(newName) {
    this.playerName = newName;
  }
  getPlayerName() {
    return this.playerName;
  }

  setPlayerScore(newScore) {
    this.score = newScore;
  }
  getPlayerScore() {
    return this.score;
  }

  setPlayerNoOfWins(newValue) {
    this.noOfWins = newValue;
  }
  getPlayerNoOfWins() {
    return this.noOfWins;
  }

  setPlayerCurrentGuess(newGuess) {
    this.currentGuess = newGuess;
  }
  getPlayerCurrentGuess() {
    return this.currentGuess;
  }

  setPlayerPlayStatus(newValue) {
    this.hasPlayed = newValue;
  }
  getPlayerPlayStatus() {
    return this.hasPlayed;
  }
}
