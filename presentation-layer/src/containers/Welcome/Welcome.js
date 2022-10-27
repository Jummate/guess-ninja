import React, { useContext } from 'react';
import Button from '../../components/button/Button';
import NinjaImage from '../../assets/ninja-gaming-joystick-sport-logo-icon.jpg';
import './Welcome.css';
import { AppContext } from '../../utils/context';

const Welcome = () => {
  const context = useContext(AppContext);
  return (
    <>
      <h1 className='Welcome__heading'>Guess Ninja</h1>
      <img
        className='Welcome__image'
        src={NinjaImage}
        alt='Ninja Gaming Joystick Sport Logo'
      />
      <Button
        buttonSize='btn--large'
        buttonStyle='btn--gradient'
        onClick={() => context.contextDispatch({ type: 'SHOW_GAME_MODE_PAGE' })}
      >
        Proceed &gt;&gt;
      </Button>
    </>
  );
};

export default Welcome;
