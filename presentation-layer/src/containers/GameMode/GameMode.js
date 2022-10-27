import React from 'react';
import './GameMode.css';
import Button from '../../components/button/Button';

const GameMode = () => {
  return (
    <>
      <h1 className='GameMode__heading'>Game Mode</h1>
      <h3 className='GameMode__text'>Click to indicate the preferred mode</h3>
      <div>
        <Button
          buttonSize='btn--large'
          buttonStyle='btn--gradient'
        >
          Single
        </Button>
        <Button
          buttonSize='btn--large'
          buttonStyle='btn--gradient'
        >
          Multiplayer
        </Button>
      </div>
    </>
  );
};
export default GameMode;
