export default function checkDraw (grid)
{
    return grid.every(square => square != null);
}