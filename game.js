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

Game.prototype.init = function()
{
    this.game_board = new GameBoard();
    this.changeState(new StateInit(this));
    this.run();
};

Game.prototype.run = function()
{
    this.curr_state.execute(this);
    this.displayTest();
};

Game.prototype.changeState = function(new_state)
{
    this.curr_state = new_state;
    this.curr_state.init(this);
};

Game.prototype.restartGame = function()
{
    this.game_board.restartBoard();
    this.game_over = false;
    this.changeState(new StateInit(this));
    this.run();
};

Game.prototype.displayTest = function()
{
    var game_area = $('#game-area');

    game_area.html('');
    if (!this.game_over)
        $('#player-turn').text('Turn ' + this.turn);

    var row_size = this.game_board.size;
    var num_rows = this.game_board.size;
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

Game.prototype.squarePicked = function(button)
{
    var index = $('#square-number').val();
    console.log("Square picked: " + index);

    if (this.game_board.setSquare(index, this.turn))
        this.run();
}

Game.prototype.declareWinner = function()
{
    this.displayWinnerTest();
    if (this.turn == 'X')
        this.x_wins++;
    else
        this.o_wins++;

    this.game_over = true;
    this.winner = this.turn;
};

Game.prototype.displayWinnerTest = function()
{
    $('#player-turn').text(this.turn + " has won the game!!!");
};