const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_HOME_PAGE":
      return {
        ...state,
        homePageActive: true,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gamePrepActive: false,
        guessTakingActive: false,
        gameGuideActive: false,
      };
    case "SHOW_GAME_MODE_PAGE":
      return {
        ...state,
        homePageActive: false,
        gameModeActive: true,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gamePrepActive: false,
        guessTakingActive: false,
        gameGuideActive: false,
        showHome: true,
        showMode: false,
        showSetup: false,
      };

    case "SHOW_GAME_GUIDE_PAGE":
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gamePrepActive: false,
        guessTakingActive: false,
        gameGuideActive: true,
        showHome: false,
        showMode: false,
        showSetup: false,
      };
    case "SHOW_GAME_SETUP_PAGE":
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: true,
        gameInfoActive: false,
        playerRegActive: false,
        guessTakingActive: false,
        gameGuideActive: false,
        showHome: true,
        showMode: true,
        showSetup: false,
        selectedMode: action.payload.selectedMode,
        multiPlayerGameType: action.payload.multiPlayerGameType,
        onePlayerGameType: action.payload.onePlayerGameType,
      };

    case "SHOW_PLAYER_REG_PAGE":
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: true,
        gamePrepActive: false,
        guessTakingActive: false,
        gameGuideActive: false,
        showHome: true,
        showMode: true,
        showSetup: true,
        numOfPlayer: action.payload.numOfPlayer,
        numOfAttempt: action.payload.numOfAttempt,
        difficulty: action.payload.difficulty,
        newGame: action.payload.newGame,
      };
    case "SHOW_GAME_INFO_PAGE":
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: true,
        playerRegActive: false,
        gamePrepActive: false,
        guessTakingActive: false,
        gameGuideActive: false,
        showHome: true,
        showMode: true,
        showSetup: true,
        difficulty: action.payload.difficulty,
        newGame: action.payload.newGame,
      };

    case "SHOW_GAME_PREP_PAGE":
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gameGuideActive: false,
        gamePrepActive: true,
        guessTakingActive: false,
      };
    case "SHOW_GUESS_TAKING_PAGE":
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gameGuideActive: false,
        gamePrepActive: false,
        guessTakingActive: true,
        numberToGuess: action.payload.numberToGuess,
        numberArray: action.payload.numberArray,
      };

    default:
      throw new Error("No matching action type");
  }
};

export default reducer;
