import GameStart from "../assets/sound/game-start.mp3";
import NumberClick from "../assets/sound/number-click.mp3";
import CorrectGuess from "../assets/sound/correct-guess.mp3";
import WrongGuess from "../assets/sound/wrong-guess.mp3";
import AttemptExhausted from "../assets/sound/attempt-exhausted.mp3";
import QuitNotice from "../assets/sound/quit-notice.mp3";
import SessionWon from "../assets/sound/session-won.mp3";
import ButtonClick from "../assets/sound/button-click.mp3";
import InputError from "../assets/sound/input-error.mp3";

export const playGameStart = () => {
  new Audio(GameStart).play();
};

export const playNumberClick = () => {
  new Audio(NumberClick).play();
};

export const playCorrectGuess = () => {
  new Audio(CorrectGuess).play();
};

export const playWrongGuess = () => {
  new Audio(WrongGuess).play();
};

export const playAttemptExhausted = () => {
  new Audio(AttemptExhausted).play();
};

export const playQuitNotice = () => {
  new Audio(QuitNotice).play();
};

export const playSessionWon = () => {
  new Audio(SessionWon).play();
};

export const playButtonClick = () => {
  new Audio(ButtonClick).play();
};

export const playInputError = () => {
  new Audio(InputError).play();
};
