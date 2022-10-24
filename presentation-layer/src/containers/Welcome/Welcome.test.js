import Welcome from './Welcome';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('when the page loads', () => {
  it('should render "Proceed Button"', () => {
    render(<Welcome />);
    const buttonElement = screen.getByText(/Proceed/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render "Guess Ninja" text', () => {
    render(<Welcome />);
    const hOneElement = screen.getByText(/Guess Ninja/i);
    expect(hOneElement).toBeInTheDocument();
  });
});
