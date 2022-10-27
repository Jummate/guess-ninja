import React from 'react';
import './GameMode.css';
import Button from '../../components/button/Button';

const GameMode = () => {
  return (
    <>
      <h1>Game Mode</h1>
      <h3>Click to indicate the preferred mode</h3>
      <div>
        <Button>Single</Button>
        <Button>Multiplayer</Button>
      </div>
    </>
  );
};
export default GameMode;
