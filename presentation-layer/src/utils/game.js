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

  getPlayersInvolved() {
    return this.playersInvolved;
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

  // getStat() {
  //   return this.playersInvolved
  //     .map((player) => player.getPlayerPlayStatus())
  //     .join(", ");
  // }
}
