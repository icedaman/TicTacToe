import React from 'react';
import { shallow } from 'enzyme';
import {Board} from './Board';
import {Square} from './Square';

describe('Render Square Component inside Board Component', () => {
  it('should render component', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find(Square));
  });
});
