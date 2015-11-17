function Player()
{
    this.sfx = null;
    this.wins = 0;
}
Player.prototype.winGame = function()
{
    this.wins++;
};
Player.prototype.getWins = function()
{
    return this.wins;
};
Player.prototype.playSound = function()
{
    var my_sound = this.sfx;
    my_sound.play();
};


function PlayerX()
{
    Player.call(this);
    this.sfx = document.getElementById('sfx_lightsaber');
}
PlayerX.prototype = new Player();
PlayerX.prototype.constructor = PlayerX;

function PlayerO()
{
    Player.call(this);
    this.sfx = document.getElementById('sfx_blaster');
}
PlayerO.prototype = new Player();
PlayerO.prototype.constructor = PlayerO;