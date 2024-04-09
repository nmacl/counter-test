import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter'; 

describe('Counter component tests', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test('renders counter component with initial count of 0', () => {
    const counterElement = screen.getByTestId('count');
    expect(counterElement).toHaveTextContent('0');
  });

  test('increment button increases count by 1', async () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    await userEvent.click(incrementButton);
    const counterElement = screen.getByTestId('count');
    expect(counterElement).toHaveTextContent('1');
  });

  test('decrement button decreases count by 1', async () => {
    const decrementButton = screen.getByRole('button', { name: '-' });
    await userEvent.click(decrementButton);
    const counterElement = screen.getByTestId('count');
    expect(counterElement).toHaveTextContent('-1');
  });

  test('clicking increment then decrement returns count to initial value', async () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    const decrementButton = screen.getByRole('button', { name: '-' });
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    const counterElement = screen.getByTestId('count');
    expect(counterElement).toHaveTextContent('0');
  });
});
