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
        showScoreTable: false,
        playBackgroundMusic2: false,
        playBackgroundMusic: true,
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
        showScoreTable: false,
        showHome: true,
        showMode: false,
        showSetup: false,
        showOtherTabs: false,
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
        showScoreTable: false,
        showHome: false,
        showMode: false,
        showSetup: false,
        showOtherTabs: false,
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
        showScoreTable: false,
        showOtherTabs: false,
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
        showOtherTabs: false,
        showScoreTable: false,
        numOfPlayer: action.payload.numOfPlayer,
        numOfAttempt: action.payload.numOfAttempt,
        difficulty: action.payload.difficulty,
        newGame: action.payload.newGame,
        numOfGamesInSession: action.payload.numOfGamesInSession,
        multiPlayerGameType: action.payload.multiPlayerGameType,
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
        showOtherTabs: false,
        showScoreTable: false,
        difficulty: action.payload.difficulty,
        newGame: action.payload.newGame,
        numOfAttempt: action.payload.numOfAttempt,
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
        showHome: false,
        showMode: false,
        showSetup: false,
        showOtherTabs: true,
        showScoreTable: false,
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
        showHome: false,
        showMode: false,
        showSetup: false,
        showOtherTabs: true,
        showScoreTable: false,
        numberToGuess: action.payload.numberToGuess,
        numberArray: action.payload.numberArray,
      };
    case "SHOW_SCORE_TABLE":
      return {
        ...state,
        showScoreTable: action.payload.showScoreTable,
      };

    case "UPDATE_TRIGGERED_BY_TAB":
      return {
        ...state,
        triggeredByTab: action.payload.triggeredByTab,
      };

    case "RANDOMIZE_THE_DIFFICULTY":
      return {
        ...state,
        difficulty: action.payload.difficulty,
      };

    case "COMPUTE_NEW_DIFFICULTY":
      return {
        ...state,
        numOfPlayer: action.payload.numOfPlayer,
        difficulty: action.payload.difficulty,
        numOfAttempt: action.payload.numOfAttempt,
      };

    case "SET_NEW_SESSION_COUNT":
      return { ...state, sessionCount: action.payload.sessionCount };

    case "INCREMENT_COUNTER":
      return { ...state, counter: action.payload.counter };

    case "PLAY_MUSIC":
      return {
        ...state,
        playBackgroundMusic: action.payload.playBackgroundMusic,
        playBackgroundMusic2: action.payload.playBackgroundMusic2,
      };

    default:
      throw new Error("No matching action type");
  }
};

export default reducer;
