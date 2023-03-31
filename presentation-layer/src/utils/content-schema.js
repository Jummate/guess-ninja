export const contentSchema = [
  {
    mainHeading: "Mode Selection",
    mainContent:
      "On the Game Mode Page, click any of the buttons to indicate the desired mode",
    list: [
      {
        heading: "",
        item: [
          { title: "Single Player:", content: "involves one player" },
          {
            title: "Multiplayer:",
            content: "involves more than one player",
          },
        ],
      },
    ],
  },

  {
    mainHeading: `Mode Type`,
    mainContent: `On the next page that shows up after specifying the desired mode,
    click any of the buttons to specify the desired Mode Type`,

    list: [
      {
        heading: "For Single Player:",
        item: [
          {
            title: "Progressive:",
            content: "game difficulty increases as game progresses",
          },
          {
            title: "Constant:",
            content: "difficulty selected is maintained throughout",
          },
          {
            title: "Random:",
            content: "difficulty varies as game progresses",
          },
        ],
      },

      {
        heading: "For Multiplayer:",
        item: [
          {
            title: "Regular:",
            content:
              "similar to Constant modetype but it involves multiple players",
          },
          {
            title: "Session:",
            content:
              "number of rounds to go is selected and the winner is declared after the specified number of rounds has been completed",
          },
        ],
      },
    ],
  },
];
