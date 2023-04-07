# Guess Ninja
***

This is a simple guessing game which can be played by one or many players. You can specify your preferred difficulty and the number of attempts to make. It is categorized into different types under different modes (Single or Multiplayer):
### Single Player
- Progressive
- Constant
- Random
### Multiplayer
- Regular
- Session

![Ninja Logo](https://github.com/Jummate/guess-ninja/blob/4d2803aa105d7ce9b2e5b008e2251030f7489e3c/presentation-layer/src/assets/images/guess-ninja-screenshot.png)

## 🚀 How To Get Started
***
### ➡ Specify The Mode
*On the Game Mode page, click any of the buttons to specify the desired mode*
- **SINGLE PLAYER**: involves one player
- **MULTIPLAYER**: involves more than one player

### ➡ Specify The Mode Type
*Click any of the buttons on the next page to specify the desired Mode Type*
- For Single Player:
1. **PROGRESSIVE**: game difficulty increases as game progresses
2. **CONSTANT**: difficulty selected is maintained throughout
3. **RANDOM**: difficulty varies as game progresses

- For Multiplayer:
1. **REGULAR**: similar to CONSTANT modetype but involves multiple players
2. **SESSION**: number of rounds is specified and winner is declared after number of rounds has been completed

### ➡ Configure The Setup
*Define the setting to apply for the game*
- No field can be empty
- Each field has its specific requirement. For example, Number of Players field will only accept a value between 2 and 5
- The length of the range the number-to-guess falls within largely depends on Number of Players, Number of Attempt, and Difficulty

### ➡ Register Players (For Multiplayer)
*Register the name of each player*
- The field cannot be submitted empty
- Each name will be unique. No name can be used for more than a player

### ➡ Confirm The Info
*Confirm the configuration defined for the game*

### ➡ Prepare To Start
*Take note of the range the number to guess falls within*

### ➡ Start Guessing
*For MULTIPLAYER game, each player takes turn to specify their guess.*
- Guesses are specified and submitted by clicking the button bearing their corresponding guess.
- The count of the buttons is determined by Number of Players, Number of Attempt, and Difficulty
- Users accessing the app via smaller devices may have to scroll vertically to locate some portions of the buttons especially for games requiring a fairly large number of the buttons

### ➡ Declaring The Winner
- For all types of game except SESSION, the player whose guess matches the number-to-guess wins the game
- For SESSION game, the player with the maximum score after the number of rounds specified for the game wins the game
- In the event that two or more players are tied on the same score, these players will be isolated for replay to determine the eventual winner

