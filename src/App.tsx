import React, { useState } from 'react';
import './App.css';
import { Container, Row, Block, Button } from './styles/index';

type BLOCK = 'x' | 'o' | '-'

function App() {
  const [board, setBoard] = useState<BLOCK[]>(
    [
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-'
    ]
  );

  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [turnNumber, setTurnNumber] = useState<number>(1);

  function handleClick(index: number) {
    if (board[index] === '-') {
      const newBoard = [...board];
      newBoard[index] = isXTurn ? 'x' : 'o';
      setTurnNumber(turnNumber+1)
      setIsXTurn(!isXTurn);
      setBoard(newBoard);
    }
  }

  function handleClear() {
    setIsXTurn(true);
    setBoard(['-','-','-','-','-','-','-','-','-']);
    setTurnNumber(1);
  }

  return (
    <div className="App">
      <Container>
        <p>Players turn: {isXTurn ? 'x' : 'o'}</p>
        <Row>
          <Block onClick={() => handleClick(0)}>{board[0] !== "-" && board[0]}</Block>
          <Block onClick={() => handleClick(1)}>{board[1] !== "-" && board[1]}</Block>
          <Block onClick={() => handleClick(2)}>{board[2] !== "-" && board[2]}</Block>
        </Row>
        <Row>
          <Block onClick={() => handleClick(3)}>{board[3] !== "-" && board[3]}</Block>
          <Block onClick={() => handleClick(4)}>{board[4] !== "-" && board[4]}</Block>
          <Block onClick={() => handleClick(5)}>{board[5] !== "-" && board[5]}</Block>
        </Row>
        <Row>
          <Block onClick={() => handleClick(6)}>{board[6] !== "-" && board[6]}</Block>
          <Block onClick={() => handleClick(7)}>{board[7] !== "-" && board[7]}</Block>
          <Block onClick={() => handleClick(8)}>{board[8] !== "-" && board[8]}</Block>
        </Row>
        <Button onClick={(handleClear)}>Clear</Button>
      </Container>
    </div>
  );
}

export default App;
