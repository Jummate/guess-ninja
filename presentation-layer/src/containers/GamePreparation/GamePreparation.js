import React, { useContext } from 'react';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import { AppContext } from '../../utils/context';
import { generateRandomNum } from '../../utils/random-number';

import './GamePreparation.css';

const GamePreparation = () => {
  const context = useContext(AppContext);
  const numberToGuess = generateRandomNum();

  const {
    initialState: { isOpenQuit },
    contextDispatch,
  } = context;
  return (
    <section className='GamePrep__container'>
      {isOpenQuit ? (
        <Modal
          title='Confirmation'
          onClose={() => contextDispatch({ type: 'CLOSE_QUIT_MODAL' })}
        >
          <h3>Are you sure you want to quit?</h3>
          <p>
            <Button
              buttonSize='btn--medium'
              buttonStyle='btn--gradient'
              onClick={() => contextDispatch({ type: 'SHOW_HOME_PAGE' })}
            >
              OK
            </Button>
            <Button
              buttonSize='btn--medium'
              buttonStyle='btn--gradient'
              onClick={() => contextDispatch({ type: 'CLOSE_QUIT_MODAL' })}
            >
              CANCEL
            </Button>
          </p>
        </Modal>
      ) : null}

      <h1 className='GamePrep__heading'>This is Game preparation page</h1>
      <h2>Timmy thinks of a number {numberToGuess}</h2>
      <Button
        buttonSize='btn--large'
        buttonStyle='btn--gradient'
        onClick={() =>
          contextDispatch({
            type: 'SHOW_GUESS_TAKING_PAGE',
            payload: { numberToGuess },
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
            contextDispatch({
              type: 'OPEN_QUIT_MODAL',
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
