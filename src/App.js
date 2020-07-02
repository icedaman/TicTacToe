import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { Board }from './components/Board';
import { TestBoard }from './components/TestBoard';

const App = () => {
  
  return (
    <div>      
      {/* <Board /> */}
      <TestBoard />
    </div>
  );
}

export default App;
