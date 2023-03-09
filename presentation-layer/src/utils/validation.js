import { alertError } from "./alert";
import { playInputError } from "./game-sound";
import { color_type } from "./reusable-variables";
import { game_mode } from "./reusable-variables";
import { mode_type } from "./reusable-variables";

const { DANGER } = color_type;
const { SINGLE } = game_mode;
const { REGULAR } = mode_type;

let errorMsg = "";

const errorStyle = `4px solid ${DANGER}`;

const validateEmpty = (ref) => {
  let NOT_EMPTY = true;
  if (!ref.current.value) {
    ref.current.style.border = errorStyle;
    errorMsg = "Some fields are empty!";
    NOT_EMPTY = false;
  } else {
    ref.current.style.border = "";
  }

  return NOT_EMPTY;
};

const validateNum = (ref) => {
  let IS_VALID = true;
  if (/[^0-9]/i.test(ref.current.value)) {
    ref.current.style.border = errorStyle;
    errorMsg = "Invalid entry. Only numbers are allowed!";
    IS_VALID = false;
  } else {
    ref.current.style.border = "";
  }
  return IS_VALID;
};

const validateAlpha = (ref) => {
  let IS_VALID = true;
  if (/[^a-zA-Z]/i.test(ref.current.value)) {
    ref.current.style.border = errorStyle;
    errorMsg = "Invalid entry. Only alphabets are allowed!";
    IS_VALID = false;
  } else {
    ref.current.style.border = "";
  }
  return IS_VALID;
};

const validateDuplicateName = (ref, game) => {
  let NOT_DUPLICATE = true;
  if (game.getPlayersInvolvedByName().includes(ref.current.value)) {
    ref.current.style.border = errorStyle;
    errorMsg = "Name already exists!";
    NOT_DUPLICATE = false;
  } else {
    ref.current.style.border = "";
  }
  return NOT_DUPLICATE;
};

const validateOutOfRange = (ref, min, max) => {
  let IS_IN_RANGE = true;
  min = Number(min);
  max = max ? Number(max) : null;
  const refValue = Number(ref.current.value);
  if (min && max && (refValue < min || refValue > max)) {
    ref.current.style.border = errorStyle;
    errorMsg = "Value out of range!";
    IS_IN_RANGE = false;
  } else if (min && !max && refValue < min) {
    errorMsg = "Value below required level!";
    ref.current.style.border = errorStyle;
    IS_IN_RANGE = false;
  } else {
    ref.current.style.border = "";
  }
  return IS_IN_RANGE;
};

const validatePlayer = (ref) => {
  return (
    validateEmpty(ref) && validateNum(ref) && validateOutOfRange(ref, 2, 5)
  );
};

const validateAttempt = (ref) => {
  return (
    validateEmpty(ref) && validateNum(ref) && validateOutOfRange(ref, 1, 3)
  );
};

const validateRound = (ref) => {
  return validateEmpty(ref) && validateNum(ref) && validateOutOfRange(ref, 1);
};

const validateSingle = (refs) => validateAttempt(refs[1]);

const validateMulti = (type, refs) => {
  const [playerRef, attemptRef, roundRef] = refs;

  if (type === `${REGULAR}`) {
    return validatePlayer(playerRef) && validateAttempt(attemptRef);
  }
  return (
    validatePlayer(playerRef) &&
    validateAttempt(attemptRef) &&
    validateRound(roundRef)
  );
};

export const validatePlayerName = (ref, currentGame, turnSoundOff) => {
  let IS_OKAY = true;

  if (
    !validateEmpty(ref) ||
    !validateAlpha(ref) ||
    !validateDuplicateName(ref, currentGame)
  ) {
    IS_OKAY = false;
    !turnSoundOff && playInputError();
    alertError(errorMsg);
  }
  return IS_OKAY;
};

export const validateField = (mode, multiGameType, turnSoundOff, refs) => {
  let IS_OKAY = true;

  if (mode === `${SINGLE}`) {
    if (!validateSingle(refs)) {
      IS_OKAY = false;
      !turnSoundOff && playInputError();
      alertError(errorMsg);
    }
  } else {
    if (!validateMulti(multiGameType, refs)) {
      IS_OKAY = false;
      !turnSoundOff && playInputError();
      alertError(errorMsg);
    }
  }

  return IS_OKAY;
};
