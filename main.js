//document.addEventListener("DOMContentLoaded" , function(event)
$(document).ready(function()
{
    game = new Game();

    //$('.game-area').on('click', 'button', function()
    //{
    //    game.squarePicked(this);
    //});
    //
    //$('#submit-button').on('click', function()
    //{
    //    game.squarePicked(this);
    //});

    $('#restart-game').on('click', function()
    {
        game.restartGame();
    });
    $('#reset-game').on('click', function()
    {
        resetGame();
    });
});

function resetGame()
{
    game = null;
    game = new Game();
}