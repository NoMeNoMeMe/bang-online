import React, { useState } from 'react';
import { Container, Row, Block, Button } from 'styles';
// showing game room's ID throws errors
import { useParams } from 'react-router-dom';
import { useRoom } from 'hooks';

type BLOCK = 'x' | 'o' | '-'
interface ID {
    id: string
}

const Room = () => {
    const { id }:ID = useParams();
    const { isFetching, room } = useRoom(id)

    if (isFetching) return <h1>Loading Room...</h1>
    if (!room) return <h1>Room not found</h1>

    const { board, isGameDone, message, playerTurn, turnNumber } = room
    console.log(room)

    function handleClick(index: number) {
        // if (board[index] === '-') {
        // const newBoard = [...board];
        // newBoard[index] = isXTurn ? 'x' : 'o';
        // setTurnNumber(turnNumber+1)
        // setIsXTurn(!isXTurn);
        // setBoard(newBoard);
        // }
    }

    function handleClear() {
        // setIsXTurn(true);
        // setBoard(['-','-','-','-','-','-','-','-','-']);
        // setTurnNumber(1);
    }

    return (
        <div className="App">
        <Container>
            <p>Room ID: { id }</p>
            <h3>{ message }</h3>
            <Row>
                <Block onClick={() => handleClick(0)}>{board[0] && board[0]}</Block>
                <Block onClick={() => handleClick(1)}>{board[1] && board[1]}</Block>
                <Block onClick={() => handleClick(2)}>{board[2] && board[2]}</Block>
            </Row>
            <Row>
                <Block onClick={() => handleClick(3)}>{board[3] && board[3]}</Block>
                <Block onClick={() => handleClick(4)}>{board[4] && board[4]}</Block>
                <Block onClick={() => handleClick(5)}>{board[5] && board[5]}</Block>
            </Row>
            <Row>
                <Block onClick={() => handleClick(6)}>{board[6] && board[6]}</Block>
                <Block onClick={() => handleClick(7)}>{board[7] && board[7]}</Block>
                <Block onClick={() => handleClick(8)}>{board[8] && board[8]}</Block>
            </Row>
            <Button onClick={(handleClear)}>Clear</Button>
        </Container>
        </div>
    );
}

export default Room;
