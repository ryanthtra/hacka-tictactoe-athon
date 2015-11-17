//document.addEventListener("DOMContentLoaded" , function(event)
$(document).ready(function()
{
    game = new Game();

    document.getElementById('restart-game').addEventListener('click', function()
    {
        game.restartGame();
    });
    document.getElementById('reset-game').addEventListener('click', function()
    {
        resetGame();
    });
});

function resetGame()
{
    game = null;
    game = new Game();
}