import Board from '../Board';
import game from './Game.module.css';
import checkWinner from '../../utils/checkWinner.js';
import checkDraw from '../../utils/checkDraw.js';
import { useState } from 'react';
import HistoryPanel from '../HistoryPanel/index.jsx';

export default function Game ()
{

    let gameActive = true;

    const [history, setHistory] = useState([Array(9).fill(null)]);

    const players = ['X', 'O'];
    const [currentMove, setCurrentMove] = useState(0);
    const currentPlayer = players[currentMove % 2];

    const currentGrid = history[currentMove];

    function handlePlay (newBoard)
    {

        // '<Array>.slice(start, end)' -> Usamos neste caso para que
        // caso volte para uma jogada anterior e a mude o histórico apague
        // as jogadas em diante

        const changedHistory = [ ...history.slice(0, currentMove + 1), newBoard ];

        setHistory (changedHistory);
        setCurrentMove(changedHistory.length - 1);

    }
    
    //#region Info Label

    let infoText = 'Jogador: ' + currentPlayer;

    if (checkDraw(currentGrid))
    {
        infoText = 'Empate!'
        gameActive = false;
    }

    const winner = checkWinner(currentGrid)
    if (winner)
    {
        infoText = 'Ganhador: ' + winner;
        gameActive = false;
    }

    //#endregion

    function handleReset ()
    {
        gameActive = true;

        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return (

        <div className={game}>

            <div>
                <section className={game.info}>
                    <label className={game.infoLabel}>{infoText}</label>
                </section>

                <section className={game.board}>

                    <Board
                        grid={currentGrid} 
                        currentPlayer={currentPlayer} 
                        onPlay={handlePlay} 
                        isActive={gameActive}
                    />
                    
                </section>

                <button
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>

            <aside className={game.history}>
                <HistoryPanel history={history} setCurrentMove={setCurrentMove} />
            </aside>

        </div>

    )

}