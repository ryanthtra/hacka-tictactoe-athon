function State(game)
{

}
State.prototype.init = function(game) {};
State.prototype.execute = function(game) {};


function StateTurnX(game)
{
    this.has_won = false;
    State.call(this, game);
}
StateTurnX.prototype = new State();
StateTurnX.prototype.constructor = StateTurnX;
StateTurnX.prototype.init = function(game)
{

};
StateTurnX.prototype.execute = function(game)
{
    if (this.has_won)
        game.changeState(new StateGameOver(game));
    else
        game.changeState(new StateTurnO(game));
};


function StateTurnO(game)
{
    this.has_won = false;
    State.call(this, game);
}
StateTurnO.prototype = new State();
StateTurnO.prototype.constructor = StateTurnO;
StateTurnO.prototype.init = function(game)
{

};
StateTurnO.prototype.execute = function(game)
{
    if (this.has_won)
        game.changeState(new StateGameOver(game));
    else
        game.changeState(new StateTurnO(game));
};


function StateGameOver(game)
{
    State.call(this, game);
}
StateGameOver.prototype = new State();
StateGameOver.prototype.constructor = StateGameOver;
StateGameOver.prototype.init = function(game)
{

};
StateGameOver.prototype.execute = function(game)
{

};