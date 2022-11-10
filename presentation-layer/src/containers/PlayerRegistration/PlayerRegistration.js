import React, { useState, useContext } from 'react';
import Navigation from '../../components/nav/Navigation';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';

import './PlayerRegistration.css';

const PlayerRegistration = () => {
  const context = useContext(AppContext);
  const [playerCount, setPlayerCount] = useState(1);

  const incrementPlayerCount = () => {
    if (playerCount < context.initialState.numOfPlayer) {
      setPlayerCount((prev) => prev + 1);
    }
  };
  return (
    <section className='PlayerReg__container'>
      <h1 className='PlayerReg__heading'>Player Registration</h1>
      <p className='player-entry-wrapper'>
        <label>Player {playerCount}:</label>
        <Input />
      </p>

      <Button
        buttonSize='btn--medium'
        buttonStyle='btn--gradient'
        onClick={incrementPlayerCount}
      >
        Enter
      </Button>

      <Button
        buttonSize='btn--large'
        buttonStyle='btn--gradient'
        onClick={() =>
          context.contextDispatch({
            type: 'SHOW_GAME_INFO_PAGE',
          })
        }
      >
        Proceed
      </Button>
      <Navigation />
    </section>
  );
};

export default PlayerRegistration;
