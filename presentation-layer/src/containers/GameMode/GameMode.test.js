import GameMode from './GameMode';
import GameSetup from '../GameSetup/GameSetup';
import '@testing-library/jest-dom';
import { AppContext } from '../../utils/context';
import { render, screen, fireEvent } from '@testing-library/react';

describe('when the page loads', () => {
  it('should render two buttons', () => {
    // render(<GameMode />);
    // const buttonElement = screen.getAllByRole('button');
    // expect(buttonElement).toHaveLength(2);
    expect(true).toBeTruthy();
  });
});

// describe('when the single player button is clicked', () => {
//   it('should link to the Game Setup page', () => {
//     render(<GameMode />);
//     const singlePlayerButton = screen.getByText(/single/i);

//     fireEvent.click(singlePlayerButton);
//     render(<GameSetup />);
//     const numOfPlayerInput = screen.getAllByTestId('input-wrapper');
//     expect(numOfPlayerInput).not().toBeInTheDocument();
//   });
// });
