import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Row = styled.div`
    display: flex;
`

export const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: solid 1px black;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: lightgray;
    }
`

export const Button = styled.button`
    width: 150px;
    justify-content: center;
    align-items: center;
`
