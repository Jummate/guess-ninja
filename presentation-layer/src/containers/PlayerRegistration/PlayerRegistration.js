import React, { useState, useContext } from 'react';
import Navigation from '../../components/nav/Navigation';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';

import './PlayerRegistration.css';

const PlayerRegistration = () => {
  const context = useContext(AppContext);
  const [playerCount, setPlayerCount] = useState(1);
  const [player, setPlayer] = useState('');
  const [playersInvolved, setPlayersInvolved] = useState([]);

  const incrementPlayerCount = () => {
    if (playerCount < context.initialState.numOfPlayer) {
      setPlayerCount((prev) => prev + 1);
    }
  };
  const clearInputField = (e) => {
    setPlayer('');
  };

  const savePlayerNames = () => {
    setPlayersInvolved((prev) => prev.push(player));
  };

  const handleClick = () => {
    savePlayerNames();
    incrementPlayerCount();
    clearInputField();
  };
  return (
    <section className='PlayerReg__container'>
      <h1 className='PlayerReg__heading'>Player Registration</h1>
      <p className='player-entry-wrapper'>
        <label>Player {playerCount}:</label>
        <Input value={player} />
      </p>

      <Button
        buttonSize='btn--medium'
        buttonStyle='btn--gradient'
        onClick={handleClick}
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
