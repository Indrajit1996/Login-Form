import React from 'react';
import { create } from "react-test-renderer";
import Login from '../containers/Login';


describe("Login component", () => {
    test("Matches the snapshot", () => {
      const button = create(<Login />);
      expect(button.toJSON()).toMatchSnapshot();
    });
});