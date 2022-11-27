import React, { useContext } from 'react';
import Button from '../../components/button/Button';
import Navigation from '../../components/nav/Navigation';
import { AppContext } from '../../utils/context';

import './GameInfo.css';

const GameInfo = () => {
  const context = useContext(AppContext);
  const { selectedMode, numOfPlayer, difficulty, playersInvolved } =
    context.initialState;
  return (
    <section className='GameInfo__container'>
      <h1 className='GameInfo__heading'>Game Details</h1>

      <h4>
        You are almost ready to get started. Here are the details about the
        current game
      </h4>

      <ul type='square'>
        <li>Game Mode: {selectedMode}</li>
        <li>No of players: {selectedMode === 'Multi' ? numOfPlayer : 1}</li>
        <li>Difficulty: {difficulty}</li>
        <li>
          Players involved:{' '}
          {selectedMode === 'Multi' ? playersInvolved.join(', ') : 'n/a'}
        </li>
      </ul>

      <Button
        buttonSize='btn--large'
        buttonStyle='btn--gradient'
        onClick={() =>
          context.contextDispatch({
            type: 'SHOW_GAME_PREP_PAGE',
          })
        }
      >
        Start Game
      </Button>

      <Navigation />
    </section>
  );
};

export default GameInfo;
