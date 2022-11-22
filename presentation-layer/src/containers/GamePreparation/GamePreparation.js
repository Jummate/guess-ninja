import React, { useContext } from 'react';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';

import './GamePreparation.css';

const GamePreparation = () => {
  const context = useContext(AppContext);
  return (
    <section className='GamePrep__container'>
      <h1 className='GamePrep__heading'>This is Game preparation page</h1>
      <Button
        buttonSize='btn--large'
        buttonStyle='btn--gradient'
        onClick={() =>
          context.contextDispatch({
            type: 'SHOW_GUESS_TAKING_PAGE',
          })
        }
      >
        Start Now
      </Button>

      <footer>
        <Button
          buttonSize='btn--medium'
          buttonStyle='btn--danger--solid'
          onClick={() =>
            context.contextDispatch({
              type: 'OPEN_MODAL',
            })
          }
        >
          Quit
        </Button>
      </footer>
    </section>
  );
};

export default GamePreparation;
