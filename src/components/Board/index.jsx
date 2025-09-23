import { useState } from "react";
import Square from "../Square";
import board from './Board.module.css';

export default function Board ({ grid, currentPlayer, onPlay, isActive })
{

    function handleClick (i)
    {

        if (!isActive) return;     
        if (grid[i] != null) return;

        grid[i] = currentPlayer;
        onPlay(grid);

    }

    return (

        <>
        {

            // 'Array(3).fill(null)' -> Criamos um array com 3 elemeentos com valor null
            // apenas para conseguirmos usar o map

            // '<Array>.map' -> Utilizamos esta alternativa ao invés do 'for' pois ele retorna
            // um valor diretamente utilízável — o novo array com os elementos transformados

            Array(3).fill(null) .map ((_, i) => {

                return (

                    <div className={board.row}>
                    {
                        Array(3).fill(null) .map ((_, j) => {

                            const squareIndex = i * 3 + j;

                            return (

                                <Square 
                                    index={squareIndex} 
                                    onClick={handleClick}
                                >
                                    {grid[squareIndex]}
                                </Square>

                            )

                        })
                    }
                    </div>

                )

            })
        }
        </>

    )    

}