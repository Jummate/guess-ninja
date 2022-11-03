import React from 'react';
import Navigation from '../../components/nav/Navigation';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import './PlayerRegistration.css';

const PlayerRegistration = () => {
  const count = 1;
  return (
    <section className='PlayerReg__container'>
      <h1 className='PlayerReg__heading'>Player Registration</h1>

      <p className='player-entry-wrapper'>
        <label>Player {count}:</label>
        <Input />
      </p>

      <Button
        buttonSize='btn--medium'
        buttonStyle='btn--gradient'
      >
        Enter
      </Button>
    </section>
  );
};

export default PlayerRegistration;
