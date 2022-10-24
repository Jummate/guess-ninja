import React from 'react';
import Button from '../../components/button/Button';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className='Welcome__container'>
      <h1 className='Welcome__heading'>Guess Ninja</h1>
      <Button buttonSize='btn--large btn--gradient'> Proceed &gt;&gt;</Button>
    </section>
  );
};

export default Welcome;
