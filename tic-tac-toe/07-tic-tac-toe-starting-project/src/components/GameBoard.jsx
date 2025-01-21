import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

let count = 0;

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    
    function handleSelectSquare(rowIndex, colIndex) {
        count++;
        console.log(count);
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            if(count % 2 == 0) {
                updatedBoard[rowIndex][colIndex] = 'O';
            } else {
                updatedBoard[rowIndex][colIndex] = 'X';
            }
            return updatedBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}