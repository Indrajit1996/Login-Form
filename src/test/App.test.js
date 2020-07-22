import React from 'react';
import { render } from '@testing-library/react';
import App, { Counter } from '../App';
import { create } from "react-test-renderer";

it('renders Login Page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Login Page/i);
  expect(linkElement).toBeInTheDocument();
});

describe("App component", () => {
  test("Matches the snapshot", () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});


