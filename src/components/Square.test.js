import React from 'react';
import { shallow } from 'enzyme';
import {Board} from './Board';
import {Square} from './Square';

describe('MyComponent', () => {
  it('should render component', () => {
    const wrapper = shallow(<Square />);
    expect(wrapper.find("button"));
  });
});
