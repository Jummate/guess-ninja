import swal from "sweetalert";

export const alertQuit = (contextDispatch, triggeredByTab = false) => {
  return swal({
    title: "Are you sure you want to end the game?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willEnd) => {
    if (willEnd) {
      contextDispatch({ type: "SHOW_HOME_PAGE" });
    } else {
      !triggeredByTab && contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
    }
  });
};

export const alertSuccess = (
  winningPlayerName,
  numberToGuess,
  sessionCount,
  selectedMode,
  contextDispatch
) => {
  return swal({
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
  }).then((value) => {
    switch (value) {
      case "continue":
        contextDispatch({
          type: "SET_NEW_SESSION_COUNT",
          payload: { sessionCount: sessionCount + 1 },
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
        alertQuit(contextDispatch);
        break;
    }
  });
};

export const alertNoWinner = (
  numberToGuess,
  sessionCount,
  selectedMode,
  contextDispatch
) => {
  return swal({
    title: `Oops! ${
      selectedMode === "Single"
        ? "Attempts used up! Try again."
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
  }).then((value) => {
    switch (value) {
      case "continue":
        contextDispatch({ type: "SHOW_GAME_PREP_PAGE" });
        contextDispatch({
          type: "SET_NEW_SESSION_COUNT",
          payload: { sessionCount: sessionCount + 1 },
        });
        break;

      default:
        alertQuit(contextDispatch);
        break;
    }
  });
};

export const alertIncorrectGuess = (contextDispatch) => {
  return swal({
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
  }).then((value) => {
    switch (value) {
      case "continue":
        break;

      default:
        alertQuit(contextDispatch);
        break;
    }
  });
};

module.export = { alertSuccess, alertQuit, alertNoWinner, alertIncorrectGuess };
