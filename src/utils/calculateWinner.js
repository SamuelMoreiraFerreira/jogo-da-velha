const winners_pattern = [

    // Linhas

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Colunas
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonais

    [0, 4, 8],
    [2, 4, 6]

]

export default function calculateWinner (grid)
{

    for (let i = 0; i < winners_pattern.length; i++)
    {
        const [a, b, c] = winners_pattern[i];

        if (grid[a] != null && grid[a] == grid[b] && grid[a] == grid[c]) return grid[a];
    }

    return null;

}