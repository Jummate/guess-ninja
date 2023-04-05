export const contentSchema = [
  {
    mainHeading: "Specify The Mode",
    mainContent:
      "On the Game Mode page, click any of the buttons to specify the desired mode",
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
    mainHeading: "Specify The Mode Type",
    mainContent:
      "Click any of the buttons on the next page to specify the desired Mode Type",

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
              "similar to CONSTANT modetype but involves multiple players",
          },
          {
            title: "Session:",
            content:
              "number of rounds is specified and winner is declared after number of rounds has been completed",
          },
        ],
      },
    ],
  },

  {
    mainHeading: "Configure The Setup",
    mainContent: "Define the setting to apply for the game",
    list: [
      {
        heading: "",
        item: [
          { title: "", content: "No field can be empty" },
          {
            title: "",
            content:
              "Each field has its specific requirement. For example, Number of Players field will only accept a value between 2 and 5",
          },
          {
            title: "",
            content:
              "The length of the range the number-to-guess falls within largely depends on Number of Players, Number of Attempt, and Difficulty",
          },
        ],
      },
    ],
  },

  {
    mainHeading: "Register Players (For Multiplayer)",
    mainContent: "Register the name of each player",
    list: [
      {
        heading: "",
        item: [
          { title: "", content: "The field cannot be submitted empty" },
          {
            title: "",
            content:
              "Each name will be unique. No name can be used for more than a player.",
          },
        ],
      },
    ],
  },

  {
    mainHeading: "Confirm The Info",
    mainContent: "Confirm the configuration defined for the game",
    list: [
      {
        heading: "",
        item: [{ title: "", content: "" }],
      },
    ],
  },

  {
    mainHeading: "Prepare To Start",
    mainContent: "Take note of the range the number to guess falls within",
    list: [
      {
        heading: "",
        item: [{ title: "", content: "" }],
      },
    ],
  },

  {
    mainHeading: "Start Guessing",
    mainContent:
      "For MULTIPLAYER game, each player takes turn to specify their guess.",
    list: [
      {
        heading: "",
        item: [
          {
            title: "",
            content:
              "guesses are specified and submitted by clicking the button bearing their corresponding guess.",
          },
          {
            title: "",
            content:
              "the count of the buttons is determined by Number of Players, Number of Attempt, and Difficulty.",
          },

          {
            title: "",
            content:
              "users accessing the app via smaller devices may have to scroll vertically to locate some portions of the buttons especially for games requiring a fairly large number of the buttons",
          },
        ],
      },
    ],
  },

  {
    mainHeading: "Declaring The Winner",
    mainContent: "",
    list: [
      {
        heading: "",
        item: [
          {
            title: "",
            content:
              "For all types of game except SESSION, the player whose guess matches the number-to-guess wins the game",
          },

          {
            title: "",
            content:
              "For SESSION game, the player with the maximum score after the number of rounds specified for the game wins the game",
          },

          {
            title: "",
            content:
              "In the event that two or more players are tied on the same score, these players will be isolated for replay to determine the eventual winner",
          },
        ],
      },
    ],
  },
];
