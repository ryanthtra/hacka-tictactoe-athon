function Game()
{
    this.board = null;
    this.current_state = null;
    this.winner = '';
}

Calculator.prototype.init = function()
{

};

Calculator.prototype.run = function()
{
    this.current_state.execute(this);
};

Calculator.prototype.changeState = function(new_state)
{
    this.curr_state = new_state;
    this.curr_state.init();
};

Calculator.prototype.restartGame = function()
{

};