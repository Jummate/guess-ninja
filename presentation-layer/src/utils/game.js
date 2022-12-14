import { Player } from "./player";
export class GuessGame {
  constructor() {
    this.gameId = Date.now();
    this.playersInvolved = [];
  }

  addPlayer(newPlayer) {
    this.playersInvolved = [
      ...this.playersInvolved,
      new Player(this.gameId, newPlayer),
    ];
  }

  getGameId() {
    return this.gameId;
  }

  getPlayersInvolvedByObjects() {
    return this.playersInvolved;
  }

  getPlayersInvolved() {
    return this.playersInvolved.map((player) => player.getPlayerName());
  }

  getNumOfPlayer() {
    return this.playersInvolved.length;
  }

  resetPlayerPlayStatus() {
    this.playersInvolved = this.playersInvolved.map((player) => {
      player.setPlayerPlayStatus(false);
      return player;
    });
  }
}
