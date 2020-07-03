import React, {useState} from 'react';
import './index.css';

export const TestBoard = () => {
  const [inputSize, setInputSize] = useState(null);
  const [board, setBoard] = useState(Array.from({length: inputSize},()=> Array.from({length: inputSize}, () => null)));
  const [xIsNext, setXIsNext] = useState(true);

  const handleSquareUpdate = (row, column) => {
    let updatedBoard = [...board];

    if (updatedBoard[row][column] == null) {
      
      if (xIsNext){
        updatedBoard[row][column] = 'X';
      } else {
        updatedBoard[row][column] = 'O';
      }
      setXIsNext(!xIsNext);
    }

    calculateWinner(updatedBoard);
    setBoard(updatedBoard);

    // console.log(board);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Number(inputSize)) {
      setBoard(Array.from({length: inputSize},()=> Array.from({length: inputSize}, () => null)));
      setInputSize(null);
    }else {
      return;
    }  
  }  

  const calculateWinner = (updatedBoard) => {
    updatedBoard.map((rowElement, rowIndex) => {
      if( !!rowElement.reduce(function(a, b){ return (a === b) ? a : NaN; })  ) {
        alert('Congratz you Won!');           
      }
      rowElement.map((colElement, colIndex) => {
        // console.log('row index '+ rowIndex+ " col index: "+colIndex+ " value: "+colElement);

      })
    })
  }

  return (
    <div>
      {}
       <form onSubmit={handleSubmit} className="formInputSize">
          <label>
            Board Size:
            <input type="text" value={Number(inputSize)} onChange={(event)=> setInputSize(event.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      <div className="mainContainer">
        <table>
          <tbody>
            {board.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    <button
                      className="testRow"
                      onClick={() => handleSquareUpdate(rowIndex, columnIndex)}
                    >
                      {board[rowIndex][columnIndex]}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="formInputSize">
        {"Player to act : " + (!xIsNext ? 'O': 'X')}
      </div>
    </div>
  );
};
