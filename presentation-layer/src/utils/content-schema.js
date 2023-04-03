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

  {
    mainHeading: "Configuring the Setup",
    mainContent: "Define the setting to apply for the game",
    list: [
      {
        heading: "",
        item: [
          { title: "", content: "No field can be left empty" },
          {
            title: "",
            content:
              "Each field has its specific requirement. For example, the field for Number of players will only accept a value between 2 and 5",
          },
          {
            title: "",
            content:
              "The length of the range the number to guess falls within is largely dependent on the number of players, the number of attempt and the difficulty",
          },
        ],
      },
    ],
  },

  {
    mainHeading: "Player Registration (For Multiplayer)",
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
    mainHeading: "Info Confirmation",
    mainContent: "Confirm the configuration defined for the game",
    list: [
      {
        heading: "",
        item: [{ title: "", content: "" }],
      },
    ],
  },

  {
    mainHeading: "Prepare to Start",
    mainContent: "Take note of the range the number to guess falls within",
    list: [
      {
        heading: "",
        item: [{ title: "", content: "" }],
      },
    ],
  },

  {
    mainHeading: "Taking a guess",
    mainContent:
      "For multiplayer game, each player takes turn to specify their guess.",
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
              "the count of the buttons is determined by the number of attempt, the number of player and the difficulty.",
          },

          {
            title: "",
            content:
              "users accessing the application via smaller devices may have to scoll vertically to locate some portions of the buttons especially for games requiring a fairly large number of the buttons",
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
              "For all types of game except Session, the player whose guess matches the number-to-guess wins the game",
          },

          {
            title: "",
            content:
              "For SESSION game, the player with the maximum score after the number of rounds specified for the game wins the game",
          },

          {
            title: "",
            content:
              "In the event that two players or more players are tied on the smae score, these players will be isolated for replay to determine the eventual winner",
          },
        ],
      },
    ],
  },
];
