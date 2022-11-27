const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_HOME_PAGE':
      return {
        ...state,
        homePageActive: true,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gamePrepActive: false,
        guessTakingActive: false,
        isOpenQuit: false,
      };
    case 'SHOW_GAME_MODE_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: true,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gamePrepActive: false,
        guessTakingActive: false,
        isOpenQuit: false,
        showHome: true,
        showMode: false,
        showSetup: false,
      };
    case 'SHOW_GAME_SETUP_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: true,
        gameInfoActive: false,
        playerRegActive: false,
        guessTakingActive: false,
        isOpenQuit: false,
        showHome: true,
        showMode: true,
        showSetup: false,
        selectedMode: action.payload.selectedMode,
      };

    case 'SHOW_PLAYER_REG_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: true,
        gamePrepActive: false,
        guessTakingActive: false,
        isOpenQuit: false,
        showHome: true,
        showMode: true,
        showSetup: true,
        numOfPlayer: action.payload.numOfPlayer,
        difficulty: action.payload.difficulty,
      };
    case 'SHOW_GAME_INFO_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: true,
        playerRegActive: false,
        gamePrepActive: false,
        guessTakingActive: false,
        isOpenQuit: false,
        showHome: true,
        showMode: true,
        showSetup: true,
        difficulty: action.payload.difficulty,
        playersInvolved: action.payload.playersInvolved,
      };

    case 'SHOW_GAME_PREP_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gamePrepActive: true,
        guessTakingActive: false,
        isOpenQuit: false,
      };
    case 'SHOW_GUESS_TAKING_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
        gamePrepActive: false,
        guessTakingActive: true,
        isOpenQuit: false,
      };
    case 'OPEN_QUIT_MODAL':
      return { ...state, isOpenQuit: true };
    case 'CLOSE_QUIT_MODAL':
      return { ...state, isOpenQuit: false };
    default:
      throw new Error('No matching action type');
  }
};

export default reducer;
