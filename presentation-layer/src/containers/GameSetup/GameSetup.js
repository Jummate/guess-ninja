import React, { useState, useContext } from 'react';
import './GameSetup.css';
import Input from '../../components/input/Input';
import Navigation from '../../components/nav/Navigation';
import Button from '../../components/button/Button';
import { AppContext } from '../../utils/context';

const GameSetup = () => {
  const context = useContext(AppContext);
  const [numOfPlayer, setNumOfPlayer] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');

  const {
    initialState: { selectedMode },
    contextDispatch,
  } = context;
  const nextPage =
    selectedMode === 'Single' ? 'SHOW_GAME_INFO_PAGE' : 'SHOW_PLAYER_REG_PAGE';

  // const handleInputChange = () => {};

  // useEffect(() => {

  // }, [numOfPlayer]);
  return (
    <section className='GameSetup__container'>
      <h1 className='GameSetup__heading'>Game Setup</h1>
      <h3 className='GameSetup__text'>Specify the gameplan</h3>
      <form>
        {selectedMode === 'Multi' ? (
          <p data-testid='input-wrapper'>
            <label>Number of Players</label>
            <Input
              type='number'
              value={numOfPlayer}
              onChange={(e) => setNumOfPlayer(e.target.value)}
            />
          </p>
        ) : null}

        <label className='difficulty-label'>Difficulty</label>
        <select
          name='difficulty'
          className='GameSetup__difficulty'
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value='Easy'>Easy</option>
          <option value='Medium'>Medium</option>
          <option value='Hard'>Hard</option>
        </select>

        <Button
          buttonSize='btn--medium'
          buttonStyle='btn--gradient'
          onClick={() =>
            contextDispatch({
              type: nextPage,
              payload: {
                numOfPlayer,
                difficulty,
              },
            })
          }
        >
          Submit
        </Button>
      </form>

      <Navigation />
    </section>
  );
};

export default GameSetup;
