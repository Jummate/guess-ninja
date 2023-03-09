import GameStart from "../assets/sound/game-start.mp3";
import NumberClick from "../assets/sound/number-click.mp3";
import CorrectGuess from "../assets/sound/correct-guess.mp3";
import WrongGuess from "../assets/sound/wrong-guess.mp3";
import AttemptExhausted from "../assets/sound/attempt-exhausted.mp3";
import QuitNotice from "../assets/sound/quit-notice.mp3";
import SessionWon from "../assets/sound/session-won.mp3";
import ButtonClick from "../assets/sound/button-click.mp3";
import InputError from "../assets/sound/input-error.mp3";
import SuccessfulRegistration from "../assets/sound/successful-registration.mp3";

export const sound = {
  GameStart,
  NumberClick,
  CorrectGuess,
  WrongGuess,
  AttemptExhausted,
  QuitNotice,
  SessionWon,
  ButtonClick,
  InputError,
  SuccessfulRegistration,
};

export const playSound = (soundToPlay) => {
  new Audio(soundToPlay).play();
};
