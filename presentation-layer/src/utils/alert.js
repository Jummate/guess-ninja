import swal from "sweetalert";
import { generateRandomDifficulty } from "./random-difficulty";
import { getSessionWinner } from "./session-winner";
import { computeNewDifficulty } from "./new-difficulty";
import { game_mode, mode_type } from "./reusable-variables";
import { playSessionWon } from "./game-sound";

export const alertError = (errorMsg) => {
  swal({
    icon: "error",
    buttons: {
      confirm: true,
    },
    content: {
      element: "p",
      attributes: {
        textContent: `${errorMsg}`,
      },
    },
  });
};

export const alertSessionEnd = async (initialState, contextDispatch) => {
  const { newGame } = initialState;

  const { winningPlayer, maxScore } = getSessionWinner(newGame);

  const value = await swal({
    icon: "success",
    closeOnClickOutside: false,
    closeOnEsc: false,
    dangerMode: true,
    content: {
      element: "div",
      attributes: {
        innerHTML: `<h3 style="color: green; padding-top:5px; font-weight: bolder">END OF SESSION!</h3><br /><h4>${winningPlayer} wins the session with ${maxScore} point${
          maxScore > 1 ? "s" : ""
        } </h4>`,
        // style: "color: maroon; font-weight: bolder",
      },
    },

    buttons: {
      continue: {
        text: " New Session",
        value: "new-session",
      },
      viewScore: {
        text: "View Score",
        value: "view-score",
      },
      quit: {
        text: "Home",
        value: "home",
      },
    },
  });
  switch (value) {
    case "new-session":
      newGame.resetPlayersScore();
      newGame.resetPlayerNoOfWins();
      newGame.resetPlayerNoOfPlays();
      contextDispatch({
        type: "SET_NEW_SESSION_COUNT",
        payload: { sessionCount: 1 },
      });
      contextDispatch({
        type: "SHOW_GAME_PREP_PAGE",
      });
      break;
    case "view-score":
      contextDispatch({
        type: "UPDATE_TRIGGERED_BY_TAB",
        payload: { triggeredByTab: false },
      });
      contextDispatch({
        type: "SHOW_SCORE_TABLE",
        payload: { showScoreTable: true },
      });
      break;

    default:
      contextDispatch({ type: "SHOW_HOME_PAGE" });
      break;
  }
};

export const alertQuit = async (contextDispatch, triggeredByTab = true) => {
  const willEnd = await swal({
    title: "Are you sure you want to end the game?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  });
  if (willEnd) {
    contextDispatch({ type: "SHOW_HOME_PAGE" });
  } else {
    !triggeredByTab && contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
  }
};

//Success Alert----------------------

export const alertSuccess = async (
  winningPlayerName,
  initialState,
  contextDispatch
) => {
  const { SINGLE, MULTI } = game_mode;
  const { SESSION, RANDOM, PROGRESSIVE } = mode_type;
  const {
    numberToGuess,
    sessionCount,
    selectedMode,
    onePlayerGameType,
    multiPlayerGameType,
    numOfGamesInSession,
    difficulty,
    numOfPlayer,
    numOfAttempt,
    counter,
    turnSoundOff,
  } = initialState;

  const { newDifficulty, newNumOfPlayer } = computeNewDifficulty(
    difficulty,
    numOfPlayer,
    counter
  );

  const title = `${winningPlayerName} win${
    selectedMode === `${SINGLE}` ? "" : "s"
  }!`;

  const value = await swal({
    icon: "success",
    closeOnClickOutside: false,
    closeOnEsc: false,
    dangerMode: true,
    content: {
      element: "div",
      attributes: {
        innerHTML: `<h3 style="color: green; padding-top:5px; font-weight: bolder">${title}</h3><br /><h4>Romeo picked ${numberToGuess}</h4>`,
        // style: "color: maroon; font-weight: bolder",
      },
    },
    buttons: {
      continue: {
        text: "Continue",
        value: "continue",
      },
      viewScore: {
        text: "View Score",
        value: "view-score",
      },
      quit: {
        text: "End Game",
        value: "quit",
      },
    },
  });
  switch (value) {
    case "continue":
      contextDispatch({
        type: "PLAY_MUSIC",
        payload: {
          playBackgroundMusic: false,
          playBackgroundMusic2: true,
        },
      });
      if (selectedMode === `${SINGLE}` && onePlayerGameType === `${RANDOM}`) {
        contextDispatch({
          type: "RANDOMIZE_THE_DIFFICULTY",
          payload: { difficulty: generateRandomDifficulty() },
        });
        contextDispatch({
          type: "SHOW_GAME_PREP_PAGE",
        });
      } else if (
        selectedMode === `${MULTI}` &&
        multiPlayerGameType === `${SESSION}`
      ) {
        if (Number(numOfGamesInSession) === Number(sessionCount)) {
          !turnSoundOff && playSessionWon();
          alertSessionEnd(initialState, contextDispatch);
        } else {
          contextDispatch({
            type: "SET_NEW_SESSION_COUNT",
            payload: { sessionCount: sessionCount + 1 },
          });
          contextDispatch({
            type: "SHOW_GAME_PREP_PAGE",
          });
        }
      } else if (
        selectedMode === `${SINGLE}` &&
        onePlayerGameType === `${PROGRESSIVE}`
      ) {
        contextDispatch({
          type: "COMPUTE_NEW_DIFFICULTY",
          payload: {
            numOfPlayer: newNumOfPlayer,
            difficulty: newDifficulty,
            numOfAttempt,
          },
        });
        contextDispatch({
          type: "INCREMENT_COUNTER",
          payload: {
            counter: counter + 1,
          },
        });

        contextDispatch({
          type: "SHOW_GAME_PREP_PAGE",
        });
      } else {
        contextDispatch({
          type: "SHOW_GAME_PREP_PAGE",
        });
      }

      break;
    case "view-score":
      contextDispatch({
        type: "PLAY_MUSIC",
        payload: {
          playBackgroundMusic: false,
          playBackgroundMusic2: true,
        },
      });
      contextDispatch({
        type: "UPDATE_TRIGGERED_BY_TAB",
        payload: { triggeredByTab: false },
      });
      contextDispatch({
        type: "SHOW_SCORE_TABLE",
        payload: { showScoreTable: true },
      });
      break;

    default:
      alertQuit(contextDispatch, false);
      break;
  }
};

export const alertNoWinner = async (initialState, contextDispatch) => {
  const { SINGLE, MULTI } = game_mode;
  const { SESSION, RANDOM, PROGRESSIVE } = mode_type;
  const {
    numberToGuess,
    sessionCount,
    selectedMode,
    onePlayerGameType,
    multiPlayerGameType,
    difficulty,
    numOfPlayer,
    numOfAttempt,
    counter,
  } = initialState;

  const { newDifficulty, newNumOfPlayer } = computeNewDifficulty(
    difficulty,
    numOfPlayer,
    counter
  );

  const errorMsg =
    selectedMode === `${SINGLE}`
      ? "Wrong guess! Attempts used up! Try again."
      : " No winner in this round!";

  const value = await swal({
    icon: "error",
    content: {
      element: "div",
      attributes: {
        innerHTML: `<h3 style="color: maroon; font-weight: bolder">${errorMsg}</h3><br /><h4>Romeo picked ${numberToGuess}</h4>`,
        // style: "color: maroon; font-weight: bolder",
      },
    },
    closeOnClickOutside: false,
    closeOnEsc: false,
    dangerMode: true,

    buttons: {
      continue: {
        text: "Start A New Round",
        value: "continue",
      },
      quit: {
        text: "End Game",
        value: "quit",
      },
    },
  });
  switch (value) {
    case "continue":
      contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });

      if (selectedMode === `${MULTI}` && multiPlayerGameType === `${SESSION}`) {
        contextDispatch({
          type: "SET_NEW_SESSION_COUNT",
          payload: { sessionCount: sessionCount + 1 },
        });
      }
      if (selectedMode === `${SINGLE}` && onePlayerGameType === `${RANDOM}`) {
        contextDispatch({
          type: "RANDOMIZE_THE_DIFFICULTY",
          payload: { difficulty: generateRandomDifficulty() },
        });
      }
      if (
        selectedMode === `${SINGLE}` &&
        onePlayerGameType === `${PROGRESSIVE}`
      ) {
        contextDispatch({
          type: "COMPUTE_NEW_DIFFICULTY",
          payload: {
            numOfPlayer: newNumOfPlayer,
            difficulty: newDifficulty,
            numOfAttempt,
          },
        });
        contextDispatch({
          type: "INCREMENT_COUNTER",
          payload: {
            counter: counter + 1,
          },
        });
      }
      break;

    default:
      alertQuit(contextDispatch, false);
      break;
  }
};

export const alertIncorrectGuess = async (contextDispatch) => {
  const value = await swal({
    // title: "Oops!",
    // text: `Incorrect guess!`,
    icon: "error",
    content: {
      element: "h2",
      attributes: {
        textContent: "Wrong guess!",
        style: "color: maroon; font-weight: bolder",
      },
    },
    closeOnClickOutside: false,
    closeOnEsc: false,
    dangerMode: true,

    buttons: {
      continue: {
        text: "Continue",
        value: "continue",
      },
      quit: {
        text: "End Game",
        value: "quit",
      },
    },
  });
  switch (value) {
    case "continue":
      break;

    default:
      alertQuit(contextDispatch, false);
      break;
  }
};

// module.export = { alertSuccess, alertQuit, alertNoWinner, alertIncorrectGuess };
