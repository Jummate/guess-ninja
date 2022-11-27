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
import { defaultState } from './utils/defaultState';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AppContext.Provider
      value={{ initialState: state, contextDispatch: dispatch }}
    >
      {state.isOpenQuit ? (
        <Modal
          title='Confirmation'
          onClose={() => dispatch({ type: 'CLOSE_QUIT_MODAL' })}
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
              onClick={() => dispatch({ type: 'CLOSE_QUIT_MODAL' })}
            >
              CANCEL
            </Button>
          </p>
        </Modal>
      ) : null}

      {state.isOpenPlayerReg ? (
        <Modal
          title='Confirmation'
          onClose={() => dispatch({ type: 'CLOSE_PLAYER_REG_MODAL' })}
        >
          <h3>Successful!</h3>
          <p>
            <Button
              buttonSize='btn--medium'
              buttonStyle='btn--gradient'
              onClick={() => dispatch({ type: 'CLOSE_PLAYER_REG_MODAL' })}
            >
              OK
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
