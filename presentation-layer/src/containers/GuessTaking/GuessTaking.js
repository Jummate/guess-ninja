import React from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import './GuessTaking.css';

const GuessTaking = () => {
  return (
    <section className='GuessTaking__container'>
      <h1 className='GuessTaking__heading'>This is Guess Taking Page</h1>

      <form>
        <p data-testid='input-wrapper'>
          <label>Player:</label>
          <Input value='Your player' />
        </p>

        <Button
          buttonSize='btn--medium'
          buttonStyle='btn--gradient'
        >
          Submit Guess
        </Button>
      </form>
    </section>
  );
};

export default GuessTaking;
