import Board from '../Board';
import game from './Game.module.css';
import calculateWinner from '../../utils/calculateWinner.js';
import { useState } from 'react';
import HistoryPanel from '../HistoryPanel/index.jsx';

export default function Game ()
{

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
    
    let infoText;

    if (calculateWinner(currentGrid))
    {
        infoText = `Ganhador: ${currentPlayer}`;
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
                    />
                    
                </section>
            </div>

            <aside className={game.history}>
                <HistoryPanel history={history} setCurrentMove={setCurrentMove} />
            </aside>

        </div>

    )

}