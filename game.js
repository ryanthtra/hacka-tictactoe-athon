function Game()
{
    this.board = [];
    this.current_state = null;
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
};