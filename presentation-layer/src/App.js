import React, { useMemo, useReducer } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Welcome,
  GameInfo,
  PlayerRegistration,
  GameSetup,
  GameGuide,
  GuessTaking,
  GamePreparation,
  GameMode,
} from "./containers";

import { reducer, AppContext, defaultState, getScore, columns } from "./utils";
import { Table, Sound } from "./components";
import { GameMusic, MinimalBeat } from "./assets";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const scoreData = getScore(state?.newGame?.getPlayersInvolved());

  const memoizedValue = useMemo(
    () => ({ initialState: state, contextDispatch: dispatch }),
    [state]
  );

  return (
    <AppContext.Provider value={memoizedValue}>
      <main className="App__container">
        <div className="App__content__wrapper">
          {state.playBackgroundMusic && !state.turnBgMusicOff ? (
            <Sound src={MinimalBeat} />
          ) : null}
          {state.playBackgroundMusic2 && !state.turnBgMusicOff ? (
            <Sound src={GameMusic} />
          ) : null}
          {state.homePageActive ? <Welcome /> : null}
          {state.gameModeActive ? <GameMode /> : null}
          {state.gameSetupActive ? <GameSetup /> : null}
          {state.gameInfoActive ? <GameInfo /> : null}
          {state.playerRegActive ? <PlayerRegistration /> : null}
          {state.gamePrepActive ? <GamePreparation /> : null}
          {state.guessTakingActive ? <GuessTaking /> : null}
          {state.gameGuideActive ? <GameGuide /> : null}
        </div>
        <ToastContainer />
        {state.showScoreTable ? (
          <Table
            data={[...scoreData].sort((prev, next) => next.score - prev.score)}
            columns={columns}
          />
        ) : null}
      </main>
    </AppContext.Provider>
  );
}

export default App;
