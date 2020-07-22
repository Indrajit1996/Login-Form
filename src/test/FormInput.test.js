import React from 'react';
import { create } from "react-test-renderer";
import FormInput from '../presenters/FormInput';

describe("Form Input component", () => {
    test("Matches the snapshot", () => {
      const formInput = create(<FormInput />);
      expect(formInput.toJSON()).toMatchSnapshot();
    });
});