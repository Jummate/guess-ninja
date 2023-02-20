import swal from "sweetalert";
import { generateRandomDifficulty } from "./random-difficulty";
import { getSessionWinner } from "./session-winner";

const alertSessionEnd = async (initialState, contextDispatch) => {
  const {
    sessionCount,
    selectedMode,
    onePlayerGameType,
    multiPlayerGameType,
    numOfGamesInSession,
    newGame,
  } = initialState;

  const { winningPlayer, maxScore } = getSessionWinner(newGame);

  const value = await swal({
    title: `END OF SESSION!`,
    // text: `${winningPlayer} wins the session with a score of ${maxScore}`,
    icon: "success",
    closeOnClickOutside: false,
    closeOnEsc: false,
    dangerMode: true,
    content: {
      element: "p",
      attributes: {
        innerHTML: `${winningPlayer} wins the session with a score of ${maxScore}`,
        style: "color: maroon; font-weight: bolder",
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
      if (selectedMode === "Single" && onePlayerGameType === "Random") {
        contextDispatch({
          type: "RANDOMIZE_THE_DIFFICULTY",
          payload: { difficulty: generateRandomDifficulty() },
        });
      } else if (
        selectedMode === "Multi" &&
        multiPlayerGameType === "Session" &&
        Number(numOfGamesInSession) === Number(sessionCount)
      ) {
        console.log("session ends");
      } else {
        contextDispatch({
          type: "SET_NEW_SESSION_COUNT",
          payload: { sessionCount: sessionCount + 1 },
        });
        contextDispatch({
          type: "SHOW_GAME_PREP_PAGE",
        });
      }

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
      alertQuit(contextDispatch);
      break;
  }
};

export const alertQuit = async (contextDispatch, triggeredByTab = false) => {
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

export const alertSuccess = async (
  winningPlayerName,
  initialState,
  contextDispatch
) => {
  const {
    numberToGuess,
    sessionCount,
    selectedMode,
    onePlayerGameType,
    multiPlayerGameType,
    numOfGamesInSession,
  } = initialState;

  const value = await swal({
    title: `${winningPlayerName} win${selectedMode === "Single" ? "" : "s"}!`,
    text: `Romeo picked ${numberToGuess}`,
    icon: "success",
    closeOnClickOutside: false,
    closeOnEsc: false,
    dangerMode: true,
    // content: {
    //   element: "p",
    //   attributes: {
    //     innerHTML: "You are trying",
    //   },
    // },
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
      if (selectedMode === "Single" && onePlayerGameType === "Random") {
        contextDispatch({
          type: "RANDOMIZE_THE_DIFFICULTY",
          payload: { difficulty: generateRandomDifficulty() },
        });
      } else if (
        selectedMode === "Multi" &&
        multiPlayerGameType === "Session" &&
        Number(numOfGamesInSession) === Number(sessionCount)
      ) {
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
      alertQuit(contextDispatch);
      break;
  }
};

export const alertNoWinner = async (initialState, contextDispatch) => {
  const { numberToGuess, sessionCount, selectedMode, onePlayerGameType } =
    initialState;

  const value = await swal({
    title: `Oops! ${
      selectedMode === "Single"
        ? "Wrong guess! Attempts used up! Try again."
        : " No winner in this round!"
    }`,
    text: `Romeo picked ${numberToGuess}`,
    icon: "error",
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
      contextDispatch({
        type: "SET_NEW_SESSION_COUNT",
        payload: { sessionCount: sessionCount + 1 },
      });
      if (selectedMode === "Single" && onePlayerGameType === "Random") {
        contextDispatch({
          type: "RANDOMIZE_THE_DIFFICULTY",
          payload: { difficulty: generateRandomDifficulty() },
        });
      }
      break;

    default:
      alertQuit(contextDispatch);
      break;
  }
};

export const alertIncorrectGuess = async (contextDispatch) => {
  const value = await swal({
    title: "Oops!",
    text: `Incorrect guess!`,
    icon: "error",
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
      alertQuit(contextDispatch);
      break;
  }
};

// module.export = { alertSuccess, alertQuit, alertNoWinner, alertIncorrectGuess };
