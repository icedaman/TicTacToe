import React, { useState } from 'react';
import './index.css';
import { switchPlayer, updateSquare } from '../actions';
import { Square } from './Square';
import { useSelector, useDispatch } from 'react-redux';

export const Board = () => {
  // const dispatch = useDispatch();

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xToPlay, setXToPlay] = useState(false);
  // const xToPlay = useSelector(state => state.xIsNext);
  
  const onClickHandler = (i) =>  {

    const newSquares = squares.slice();

    if(newSquares[i] == null ){
      newSquares[i] = xToPlay ? 'X' : 'O';
      // dispatch(switchPlayer(!xToPlay));
      setXToPlay(!xToPlay);
      setSquares(newSquares);
    }
  }

  const renderSquares = (i) => {
    return(
      <Square
        value={squares[i]} 
        onClickSquare={() => onClickHandler(i)} 
      />
    ); 
  }

  return (
    <>
      <h1>Welcome to the Tic Toc Toe Game!</h1>
      <div className="mainContainer">
        <div className="row">
          {renderSquares(0)}
          {renderSquares(1)}
          {renderSquares(2)}
        </div>
        <div className="row">
          {renderSquares(3)}
          {renderSquares(4)}
          {renderSquares(5)}
        </div>
        <div className="row">
          {renderSquares(6)}
          {renderSquares(7)}
          {renderSquares(8)}
        </div>
      </div>
      <h2>Player to act:  {xToPlay ? 'X' : 'O'}</h2>
    </>
  );
};
