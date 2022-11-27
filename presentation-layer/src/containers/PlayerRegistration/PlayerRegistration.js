import React, { useState, useContext } from 'react';
import Navigation from '../../components/nav/Navigation';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';
import { showAlert } from '../../utils/alert';

import './PlayerRegistration.css';

const PlayerRegistration = () => {
  const context = useContext(AppContext);
  const { numOfPlayer, difficulty } = context.initialState;
  const [playerCount, setPlayerCount] = useState(1);
  const [player, setPlayer] = useState('');
  const [playersInvolved, setPlayersInvolved] = useState([]);
  const successConfig = {
    title: 'Success',
    text: 'Saved succesfully',
    icon: 'success',
    confirmButtonText: 'OK',
  };

  const incrementPlayerCount = () => {
    if (playerCount < Number(numOfPlayer)) {
      setPlayerCount((prev) => prev + 1);
    }
  };
  const clearInputField = (e) => {
    setPlayer('');
  };

  const savePlayerNames = () => {
    setPlayersInvolved([...playersInvolved, player]);
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
        <Input
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
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
            payload: { playersInvolved, difficulty },
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
