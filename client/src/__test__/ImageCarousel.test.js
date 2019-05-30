import React from ' react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';

it('should return a single-node wrapper.', () => {
  expect(shallow((<App />).length).toEqual(1))
})