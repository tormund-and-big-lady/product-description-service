import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App.jsx';

it('should return a single-node wrapper.', () => {
  expect(shallow(<App />).length).toEqual(1)
})