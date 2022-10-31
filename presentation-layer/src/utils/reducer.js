const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_HOME_PAGE':
      return {
        ...state,
        homePageActive: true,
        gameModeActive: false,
        gameSetupActive: false,
      };
    case 'SHOW_GAME_MODE_PAGE':
      return {
        ...state,
        homePageActive: false,
        gameModeActive: true,
        gameSetupActive: false,
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
        showHome: true,
        showMode: true,
        showSetup: false,
      };
    default:
      throw new Error('No matching action type');
  }
};

export default reducer;
