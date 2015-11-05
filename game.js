function Game()
{
    this.game_board = null;
    this.curr_state = null;
    this.winner = 'O';
    this.turn = 'X';
    this.game_over = false;
    this.win_conditions = [];
    this.x_wins = 0;
    this.o_wins = 0;

    this.init();
}


/**
 * init - starts the entire game
 */
Game.prototype.init = function()
{
    this.game_board = new GameBoard();
    this.setWinConditions();
    this.changeState(new StateInit(this));
    this.run();
};


/**
 * setWinConditions - creates the set of win conditions for the game
 */
Game.prototype.setWinConditions = function()
{
    this.win_conditions.push(new Win_Cond_Row());
    this.win_conditions.push(new Win_Cond_Col());
    this.win_conditions.push(new Win_Cond_Diag());
};


/**
 * checkWinConditions - checks each win condition if any of them have been met
 * @returns {boolean} - whether a win condition has been met
 */
Game.prototype.checkWinConditions = function()
{
    // Go through each win condition in the array
    for (var i = 0; i < this.win_conditions.length; i++)
    {
        // If we meet a win condition, we can return the function right there;
        // no need to check the other win conditions anymore.
        if (this.win_conditions[i].check(this.game_board.board, this.turn))
            return true;
    }
    return false;
};


/**
 * run - the main controller of the game's state-machine
 */
Game.prototype.run = function()
{
    this.curr_state.execute(this);

    // For the skeleton html
    this.displayTest();
};


/**
 * Changes the state for the state-machine
 * @param new_state - the state to change to
 */
Game.prototype.changeState = function(new_state)
{
    this.curr_state = new_state;
    this.curr_state.init(this);
};


/**
 * restart - Start a brand new game (don't reset stats)
 */
Game.prototype.restartGame = function()
{
    this.game_board.restartBoard();
    this.game_over = false;
    this.changeState(new StateInit(this));
    this.run();
};


/**
 * displayTest - updates the game in the DOM
 */
Game.prototype.displayTest = function()
{
    var game_area = $('#game-area');

    // Empty out the game board display
    game_area.html('');

    // Display whose turn it is
    if (!this.game_over)
        $('#player-turn').text('Turn ' + this.turn);

    var row_size = this.game_board.size;
    var num_rows = this.game_board.size;

    // Display each square according to how it's been filled.
    for (var i = 0; i < num_rows; i++)
    {
        for (var j = 0; j < row_size; j++)
        {
            var square = 'E';
            if (this.game_board.board[i*row_size + j]['X'] == true)
                square = 'X';
            else if (this.game_board.board[i*row_size + j]['O'] == true)
                square = 'O';
            game_area.append($('<span>').text(square));
        }
        game_area.append($('<br>'));
    }
};


/**
 * squarePicked - event-handler for when the player picks a square to fill
 * @param button - the button that was clicked (unnecessary)
 */
Game.prototype.squarePicked = function(button)
{
    var index = $('#square-number').val();
    console.log("Square picked: " + index);

    if (this.game_board.setSquare(index, this.turn))
        this.run();
}


/**
 * declareWinner - sets win variables and stats
 */
Game.prototype.declareWinner = function()
{
    // This is only for the skeleton test html page
    this.displayWinnerTest();

    if (this.turn == 'X')
        this.x_wins++;
    else
        this.o_wins++;

    this.game_over = true;
    this.winner = this.turn;
};


/**
 * displayWinnerTest - displays the winner message in the DOM
 */
Game.prototype.displayWinnerTest = function()
{
    $('#player-turn').text(this.turn + " has won the game!!!");
};