import React from 'react';
import Button from '../../components/button/Button';
import NinjaImage from '../../assets/ninja-gaming-joystick-sport-logo-icon.jpg';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className='Welcome__container'>
      <h1 className='Welcome__heading'>Guess Ninja</h1>
      <img
        className='Welcome__image'
        src={NinjaImage}
        alt='Ninja Gaming Joystick Sport Logo'
      />
      <Button buttonSize='btn--large btn--gradient'> Proceed &gt;&gt;</Button>
    </section>
  );
};

export default Welcome;
