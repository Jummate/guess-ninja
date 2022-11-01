import React from 'react';
import './GameSetup.css';
import Input from '../../components/input/Input';
import Navigation from '../../components/nav/Navigation';
import Button from '../../components/button/Button';

const GameSetup = () => {
  return (
    <section className='GameSetup__container'>
      <h1 className='GameSetup__heading'>Game Setup</h1>
      <h3 className='GameSetup__text'>Specify the gameplan</h3>
      <form>
        <label>Number of Players</label>
        <Input />

        <label className='difficulty-label'>Difficulty</label>
        <select
          name='difficult'
          className='GameSetup__difficulty'
        >
          <option value='Easy'>Easy</option>
          <option value='Medium'>Medium</option>
          <option value='Hard'>Hard</option>
        </select>

        <Button
          buttonSize='btn--large'
          buttonStyle='btn--gradient'
        >
          Submit
        </Button>
      </form>

      <Navigation />
    </section>
  );
};

export default GameSetup;