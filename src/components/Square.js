import React from 'react';
import './index.css';

export const Square = (props) => {

  return (
    <button 
      className="square"
      onClick={props.onClickSquare} 
    >
        <h1>{props.value}</h1>
    </button>
  );
};
