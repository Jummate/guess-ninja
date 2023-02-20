import { options } from "./difficulty-options";

export const generateRandomDifficulty = () =>
  [...options].sort(() => Math.random() - 0.5)[0].value;
