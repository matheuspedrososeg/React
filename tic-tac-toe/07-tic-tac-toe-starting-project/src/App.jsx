import Player from "./components/Player"
import logo from "./assets/game-logo.png"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0  && gameTurns[0].player === 'X') {
    currentPlayer ='O';
  }
  return currentPlayer;
}

function App() {
  const[gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X')

function handleSelectSquare(rowIndex, colIndex) {
  // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  setGameTurns(prevTurns => {
    const currentPlayer = deriveActivePlayer(prevTurns);

    const updatedTurns = [
      { square: {row : rowIndex, col: colIndex}, player: activePlayer},
       ...prevTurns,
      ];

      return updatedTurns;
  });
}

  return (
    <main>
      <div className="logo-area">
      <img src={logo} alt="logo" id="img-logo"/>
      <h1>Tic-tac-toe</h1>
      </div>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player  name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>     
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log  turns={gameTurns}/>
    </main>
  )
}

export default App
