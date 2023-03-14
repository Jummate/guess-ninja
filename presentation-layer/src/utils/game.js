import { Player } from "./player";
export class GuessGame {
  constructor() {
    this.gameId = Date.now();
    this.playersInvolved = [];
    this.voidRound = 0;
  }

  addPlayer(newPlayer) {
    this.playersInvolved = [
      ...this.playersInvolved,
      new Player(this.gameId, newPlayer),
    ];
  }

  getVoidRound() {
    return this.voidRound;
  }
  incrementVoid() {
    this.voidRound = this.getVoidRound() + 1;
  }

  getGameId() {
    return this.gameId;
  }

  getPlayersInvolved() {
    return this.playersInvolved;
  }

  setPlayersInvolved(newPlayers) {
    this.playersInvolved = [...newPlayers];
  }

  getPlayersInvolvedByName() {
    return this.playersInvolved.map((player) => player.getPlayerName());
  }

  getCountOfPlayersInvolved() {
    return this.playersInvolved.length;
  }

  updatePlayersNoOfPlays() {
    this.playersInvolved = this.playersInvolved.map((player) => {
      player.setPlayerNoOfPlays(player.getPlayerNoOfPlays() + 1);
      return player;
    });
  }

  resetPlayersPlayStatus() {
    this.playersInvolved = this.playersInvolved.map((player) => {
      player.setPlayerPlayStatus(false);
      return player;
    });
  }

  resetPlayersScore() {
    this.playersInvolved = this.playersInvolved.map((player) => {
      player.setPlayerScore(0);
      return player;
    });
  }

  resetPlayerNoOfWins() {
    this.playersInvolved = this.playersInvolved.map((player) => {
      player.setPlayerNoOfWins(0);
      return player;
    });
  }

  resetPlayerNoOfPlays() {
    this.playersInvolved = this.playersInvolved.map((player) => {
      player.setPlayerNoOfPlays(0);
      return player;
    });
  }

  // getStat() {
  //   return this.playersInvolved
  //     .map((player) => player.getPlayerPlayStatus())
  //     .join(", ");
  // }
}
