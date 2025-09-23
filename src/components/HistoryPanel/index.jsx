export default function HistoryPanel ({ history, setCurrentMove })
{

    function handleJumpTo (nextMove)
    {
        setCurrentMove(nextMove);
    }
    
    return (

        <ol>
        {
            history.map ((_, move) => {

                let description;

                if (move > 0) description = 'Jogada #' + move;
                else  description = 'Início do Jogo';

                return (

                    <li>
                        <button
                            onClick={() => handleJumpTo(move)}
                        >
                            {description}
                        </button>
                    </li>

                )
            
            })
        }
        </ol>

    )

} 