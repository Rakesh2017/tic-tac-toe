import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import SquareBox from './game-buttons.js'


const Game = () => {

  let response;
  async function test () {
      response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: "developer: rakesh" }),
    });
    console.log(await response.text());
  }

    
  test();

  return (
    <div className="main-container">
      <div className="title-container">

        <h3 className="game-title">TIC - TAC - TOE</h3>

      </div>
      <SquareBox />
    </div>
  )
}


ReactDOM.render(<Game />, document.getElementById('root'));

export default Game;
