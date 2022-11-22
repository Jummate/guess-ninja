import React, { useContext } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';

import './GuessTaking.css';

const GuessTaking = () => {
  const context = useContext(AppContext);
  return (
    <section className='GuessTaking__container'>
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
          onClick={() => context.contextDispatch({ type: 'OPEN_MODAL' })}
        >
          Quit
        </Button>
      </footer>
    </section>
  );
};

export default GuessTaking;
