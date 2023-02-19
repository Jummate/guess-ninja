// const difference = (first, second) => {
//   const tempArr = first.reduce(
//     (temp, player) =>
//       second.filter((playerInsecond) => playerInsecond.isEqualTo(player)).length
//         ? temp
//         : [...temp, player],
//     []
//   );

//   return tempArr;
// };

export const generateRandomPlayers = (arrayOfPlayers) =>
  [...arrayOfPlayers].sort(() => Math.random() - 0.5);
