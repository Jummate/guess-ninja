import React, { useReducer } from 'react';
import ParticlesComponent from './components/Particles';
import './App.css';
import Welcome from './containers/Welcome/Welcome';
import GameMode from './containers/GameMode/GameMode';
import GameSetup from './containers/GameSetup/GameSetup';
import PlayerRegistration from './containers/PlayerRegistration/PlayerRegistration';
import GameInfo from './containers/GameInfo/GameInfo';
import reducer from './utils/reducer';
import { AppContext } from './utils/context';

const defaulState = {
  homePageActive: true,
  gameModeActive: false,
  gameSetupActive: false,
  gameInfoActive: false,
  playerRegActive: false,
  showHome: false,
  showMode: false,
  showSetup: false,
  selectedMode: '',
  numOfPlayer: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaulState);

  return (
    <AppContext.Provider
      value={{ initialState: state, contextDispatch: dispatch }}
    >
      <main className='App__container'>
        <ParticlesComponent />
        <div className='App__content__wrapper'>
          {state.homePageActive ? <Welcome /> : null}
          {state.gameModeActive ? <GameMode /> : null}
          {state.gameSetupActive ? <GameSetup /> : null}
          {state.gameInfoActive ? <GameInfo /> : null}
          {state.playerRegActive ? <PlayerRegistration /> : null}
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
