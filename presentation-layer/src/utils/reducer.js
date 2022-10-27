const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_GAME_MODE_PAGE':
      return { ...state, homePageActive: false, gameModeActive: true };
  }
};

export default reducer;
