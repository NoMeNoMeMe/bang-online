import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

const Home: FC = () => {
  const history = useHistory()

  function handleClick() {
    history.push('/room/AAAA')
  }

  function handleClickBANG() {
    history.push('/bangroom/BBBB')
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to Game Room</button><br></br>
      <button onClick={handleClickBANG}>Go to Bang Game Room</button>
    </>
  )
}

export default Home
