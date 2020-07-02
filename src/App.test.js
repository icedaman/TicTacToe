import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {Board} from './components/Board';

describe('Render Board Component inside App Component', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Board));
  });
});
