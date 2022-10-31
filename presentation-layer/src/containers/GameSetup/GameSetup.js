import React from 'react';
import './GameSetup.css';
import Input from '../../components/input/Input';

const GameSetup = () => {
  return (
    <section className='GameSetup__container'>
      <h1 className='GameSetup__heading'>Game Setup</h1>
      <h3 className='GameSetup__text'>Specify the gameplan</h3>
      <Input />
    </section>
  );
};

export default GameSetup;
