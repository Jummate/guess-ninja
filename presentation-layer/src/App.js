import React, { useReducer } from 'react';
import ParticlesComponent from './components/Particles';
import './App.css';
import Welcome from './containers/Welcome/Welcome';
import GameMode from './containers/GameMode/GameMode';
import GameSetup from './containers/GameSetup/GameSetup';
import PlayerRegistration from './containers/PlayerRegistration/PlayerRegistration';
import GameInfo from './containers/GameInfo/GameInfo';
import GamePreparation from './containers/GamePreparation/GamePreparation';
import reducer from './utils/reducer';
import { AppContext } from './utils/context';
import GuessTaking from './containers/GuessTaking/GuessTaking';
import Modal from './components/modal/Modal';
import Button from './components/button/Button';

const defaulState = {
  isOpen: false,
  homePageActive: true,
  gameModeActive: false,
  gameSetupActive: false,
  gameInfoActive: false,
  playerRegActive: false,
  gamePrepActive: false,
  showHome: false,
  showMode: false,
  showSetup: false,
  selectedMode: '',
  numOfPlayer: 0,
  difficulty: 'Easy',
  playersInvolved: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaulState);

  return (
    <AppContext.Provider
      value={{ initialState: state, contextDispatch: dispatch }}
    >
      {state.isOpen ? (
        <Modal
          title='Confirmation'
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        >
          <h3>Are you sure you want to quit?</h3>
          <p>
            <Button
              buttonSize='btn--medium'
              buttonStyle='btn--gradient'
              onClick={() => dispatch({ type: 'SHOW_HOME_PAGE' })}
            >
              OK
            </Button>
            <Button
              buttonSize='btn--medium'
              buttonStyle='btn--gradient'
              onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
            >
              CANCEL
            </Button>
          </p>
        </Modal>
      ) : null}

      <main className='App__container'>
        <ParticlesComponent />
        <div className='App__content__wrapper'>
          {state.homePageActive ? <Welcome /> : null}
          {state.gameModeActive ? <GameMode /> : null}
          {state.gameSetupActive ? <GameSetup /> : null}
          {state.gameInfoActive ? <GameInfo /> : null}
          {state.playerRegActive ? <PlayerRegistration /> : null}
          {state.gamePrepActive ? <GamePreparation /> : null}
          {state.guessTakingActive ? <GuessTaking /> : null}
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
