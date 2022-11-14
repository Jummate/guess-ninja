import React, { useContext } from 'react';
import Button from '../../components/button/Button';
import Navigation from '../../components/nav/Navigation';
import { AppContext } from '../../utils/context';

import './GameInfo.css';

const GameInfo = () => {
  const context = useContext(AppContext);
  return (
    <section className='GameInfo__container'>
      <h1>This is Game Info Page</h1>

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
