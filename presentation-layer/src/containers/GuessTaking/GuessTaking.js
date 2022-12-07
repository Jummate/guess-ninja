import React, { useContext, useEffect, useState } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';
import Modal from '../../components/modal/Modal';
import { generateRandomPlayers } from '../../utils/random-player';

import './GuessTaking.css';

const GuessTaking = () => {
  const context = useContext(AppContext);
  const {
    initialState: { isOpenQuit, numberToGuess, newGame },
    contextDispatch,
  } = context;
  const [playersAlreadyGuessed, setPlayersAlreadyGuessed] = useState([]);
  const [playerGuess, setPlayerGuess] = useState('');
  const [nextPlayerToGuess, setNextPlayerToGuess] = useState(
    generateRandomPlayers(
      newGame.getPlayersInvolvedByObjects(),
      playersAlreadyGuessed
    )
  );

  const clearInputField = (e) => {
    setPlayerGuess('');
  };

  const processPlayerGuess = () => {
    console.log('Wronggggggggg!');
  };

  const handleClick = () => {
    processPlayerGuess();
    savePlayersAlreadyGuessed();
    clearInputField();
  };

  const savePlayersAlreadyGuessed = () => {
    console.log('already');
    setPlayersAlreadyGuessed((prev) => [...prev, nextPlayerToGuess]);
  };

  useEffect(() => {
    // setPlayersAlreadyGuessed((prev) => [...prev, nextPlayerToGuess]);
    // console.log(nextPlayerToGuess);
    setNextPlayerToGuess(
      generateRandomPlayers(
        newGame.getPlayersInvolvedByObjects(),
        playersAlreadyGuessed
      )
    );

    console.log('Guess Taking');
    console.log(
      '==============================================================='
    );
  }, [playersAlreadyGuessed, newGame]);

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
          {console.log('next player', nextPlayerToGuess)}

          {console.log('already guessed', playersAlreadyGuessed)}
          {console.log(
            '================================================================'
          )}
          {/* {console.log('You', nextPlayerToGuess)} */}
          <label>Player: {nextPlayerToGuess.getPlayerName()}</label>
          <Input
            type='number'
            value={playerGuess}
            onChange={(e) => setPlayerGuess(e.target.value)}
          />
        </p>

        <Button
          buttonSize='btn--medium'
          buttonStyle='btn--gradient'
          onClick={handleClick}
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
