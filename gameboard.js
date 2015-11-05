function GameBoard()
{
    this.board = [];
    this.size = 0;  // Number of square in each row AND the number of rows

    this.resetBoard();
};

GameBoard.prototype.constructBoard = function()
{
    //var size = Math.floor((Math.random() * (MAX_BOARD_SIZE - MIN_BOARD_SIZE)) + MIN_BOARD_SIZE);
    var size = 3;
    this.size = size;

    // Populate board array with empty square objects
    for (var i = 0; i < size*size; i++)
    {
        this.board.push(
            {
                X: false,
                O: false,
                empty: true
            }
        );
    }
};

GameBoard.prototype.resetBoard = function()
{
    this.board = [];
    this.size = 0;

    this.constructBoard();
};

GameBoard.prototype.restartBoard = function()
{
    for (var i = 0; i < this.board.length; i++)
    {
        this.board[i]['X'] = false;
        this.board[i]['O'] = false;
        this.board[i]['empty'] = true;
    }
}

GameBoard.prototype.setSquare = function(square_index, player_char)
{
    if ((this.board[square_index]['empty'] == true)
        && (square_index >= 0)
        && (square_index < this.board.length))
    {
        this.board[square_index][player_char] = true;
        this.board[square_index]['empty'] = false;

        return true;
    }
    return false;
};

