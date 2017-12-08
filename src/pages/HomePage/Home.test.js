import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './index';

describe('HomePage', () => {
  const homePage = <HomePage />;
  it('should render properly', () => {
    expect(homePage).toMatchSnapshot();
  });
});
