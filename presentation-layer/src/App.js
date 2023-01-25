import React, { useReducer } from "react";
import ParticlesComponent from "./components/Particles";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Welcome from "./containers/Welcome/Welcome";
import GameMode from "./containers/GameMode/GameMode";
import GameSetup from "./containers/GameSetup/GameSetup";
import PlayerRegistration from "./containers/PlayerRegistration/PlayerRegistration";
import GameInfo from "./containers/GameInfo/GameInfo";
import GamePreparation from "./containers/GamePreparation/GamePreparation";
import GameGuide from "./containers/GameGuide/GameGuide";
import reducer from "./utils/reducer";
import { AppContext } from "./utils/context";
import GuessTaking from "./containers/GuessTaking/GuessTaking";
import { defaultState } from "./utils/defaultState";
import Table from "./components/table/Table";
import { getScore, columns } from "./utils/score";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const scoreData = getScore(state?.newGame?.getPlayersInvolved());

  return (
    <AppContext.Provider
      value={{ initialState: state, contextDispatch: dispatch }}
    >
      <main className="App__container">
        <ParticlesComponent />
        <div className="App__content__wrapper">
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
            data={scoreData}
            columns={columns}
          />
        ) : null}
      </main>
    </AppContext.Provider>
  );
}

export default App;
