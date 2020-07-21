import React from 'react';
import { render } from '@testing-library/react';
import App, { Counter } from './App';

test('renders Login Page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Login Page/i);
  expect(linkElement).toBeInTheDocument();
});

