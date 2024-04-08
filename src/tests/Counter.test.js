// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  fireEvent.click(increment);
  const counter = screen.getByTestId('count');
  expect(counter).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decriment = screen.getByText('-');
  fireEvent.click(decriment);
  const counter = screen.getByTestId('count');
  expect(counter).toHaveTextContent('-1');
});
