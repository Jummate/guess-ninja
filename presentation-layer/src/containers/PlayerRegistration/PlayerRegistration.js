import React, { useState, useContext } from 'react';
import Navigation from '../../components/nav/Navigation';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';
import Modal from '../../components/modal/Modal';
import { FaStar } from 'react-icons/fa';

import './PlayerRegistration.css';

const PlayerRegistration = () => {
  const context = useContext(AppContext);
  const {
    initialState: { numOfPlayer, difficulty, isOpenPlayerReg, newGame },
    contextDispatch,
  } = context;
  const [playerCount, setPlayerCount] = useState(1);
  const [player, setPlayer] = useState('');
  // const [playersInvolved, setPlayersInvolved] = useState([]);

  const registerPlayer = () => {
    newGame.addPlayer(player);
  };

  const incrementPlayerCount = () => {
    if (playerCount < Number(numOfPlayer)) {
      setPlayerCount((prev) => prev + 1);
    }
  };
  const clearInputField = (e) => {
    setPlayer('');
  };

  // const savePlayerNames = () => {

  //   setPlayersInvolved([...playersInvolved, player]);
  // };

  const handleClick = () => {
    // savePlayerNames();
    registerPlayer();
    incrementPlayerCount();
    clearInputField();
    if (playerCount === Number(numOfPlayer)) {
      contextDispatch({
        type: 'OPEN_PLAYER_REG_MODAL',
      });
    }
  };
  return (
    <section className='PlayerReg__container'>
      {/* Modal starts---------------------------- */}
      {isOpenPlayerReg ? (
        <Modal
          title='Confirmation'
          onClose={() => contextDispatch({ type: 'CLOSE_PLAYER_REG_MODAL' })}
        >
          <h2>
            COMPLETED{' '}
            <span>
              <FaStar />
            </span>
          </h2>
          <h3>Players successfully registered!</h3>
          <p>
            <Button
              buttonSize='btn--large'
              buttonStyle='btn--gradient'
              onClick={() =>
                contextDispatch({
                  type: 'SHOW_GAME_INFO_PAGE',
                  payload: { difficulty, newGame },
                })
              }
            >
              Proceed
            </Button>
          </p>
        </Modal>
      ) : null}

      <h1 className='PlayerReg__heading'>Player Registration</h1>
      <p className='player-entry-wrapper'>
        <label>Player {playerCount}:</label>
        <Input
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
      </p>

      <Button
        buttonSize='btn--medium'
        buttonStyle='btn--gradient'
        onClick={handleClick}
      >
        Enter
      </Button>

      <Navigation />
    </section>
  );
};

export default PlayerRegistration;
