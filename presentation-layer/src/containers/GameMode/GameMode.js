import React, { useContext } from 'react';
import './GameMode.css';
import Button from '../../components/button/Button';
import Navigation from '../../components/nav/Navigation';
import { AppContext } from '../../utils/context';

const GameMode = () => {
  const context = useContext(AppContext);
  return (
    <>
      <h1 className='GameMode__heading'>Game Mode</h1>
      <h3 className='GameMode__text'>Click to indicate the preferred mode</h3>
      <div>
        <Button
          buttonSize='btn--large'
          buttonStyle='btn--gradient'
          onClick={() =>
            context.contextDispatch({ type: 'SHOW_GAME_SETUP_PAGE' })
          }
        >
          Single
        </Button>
        <Button
          buttonSize='btn--large'
          buttonStyle='btn--gradient'
          onClick={() =>
            context.contextDispatch({ type: 'SHOW_GAME_SETUP_PAGE' })
          }
        >
          Multiplayer
        </Button>
      </div>

      <Navigation />
    </>
  );
};
export default GameMode;
