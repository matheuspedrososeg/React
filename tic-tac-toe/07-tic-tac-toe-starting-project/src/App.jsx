import Player from "./components/Player"
import logo from "./assets/game-logo.png"
import GameBoard from "./components/GameBoard"

function App() {

  return (
    <main>
      <div className="logo-area">
      <img src={logo} alt="logo" id="img-logo"/>
      <h1>Tic-tac-toe</h1>
      </div>
      <div id="game-container">
        <ol id="players">
          <Player  name="Player 1" symbol={"X"}/>
          <Player name={"Player 2"} symbol={"O"}/>     
        </ol>
        <GameBoard>
          
        </GameBoard>
      </div>
    </main>
  )
}

export default App
