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
      };
    case 'SHOW_GAME_MODE_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: true,
        gameSetupActive: false,
        gameInfoActive: false,
        playerRegActive: false,
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
        showHome: true,
        showMode: true,
        showSetup: true,
        numOfPlayer: action.payload.numOfPlayer,
      };
    case 'SHOW_GAME_INFO_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: false,
        gameSetupActive: false,
        gameInfoActive: true,
        playerRegActive: false,
        showHome: true,
        showMode: true,
        showSetup: true,
      };
    default:
      throw new Error('No matching action type');
  }
};

export default reducer;
