import React, { useContext } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';
import Modal from '../../components/modal/Modal';

import './GuessTaking.css';

const GuessTaking = () => {
  const context = useContext(AppContext);
  const {
    initialState: { isOpenQuit },
    contextDispatch,
  } = context;

  return (
    <section className='GuessTaking__container'>
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

      <h1 className='GuessTaking__heading'>This is Guess Taking Page</h1>
      <form>
        <p data-testid='input-wrapper'>
          <label>Player:</label>
          <Input type='number' />
        </p>

        <Button
          buttonSize='btn--medium'
          buttonStyle='btn--gradient'
        >
          Submit Guess
        </Button>
      </form>

      <footer>
        <Button
          buttonSize='btn--medium'
          buttonStyle='btn--danger--solid'
          onClick={() => contextDispatch({ type: 'OPEN_QUIT_MODAL' })}
        >
          Quit
        </Button>
      </footer>
    </section>
  );
};

export default GuessTaking;
