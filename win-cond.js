var board_sq_3 = [
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},{'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}
];

var board_sq_4 = [
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},{'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},{'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}
];

var board_sq_5 = [
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},{'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},{'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}
];

var board_sq_6 = [
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},{'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},{'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true},
    {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}, {'x':false, 'o':false, 'empty': true}
];
var win_condition = function(){
    self = this;
    self.check_row_win = function(board, turn){
        var row_length = Math.sqrt(board.length);
        var num_rows = Math.sqrt(board.length);
        var index = (i * row_length) + j;
        for(var i=0;i<row_length - 1;i++){
            var rows_filled = 0;
            for(var j=0;j<num_rows - 1; j++){
                if(board[index][turn]){
                    rows_filled++;
                }
                else{
                    break;
                }
            }
            if(rows_filled == row_length){
                return true;
            }
        }
    }
    self.check_col_win = function(board,turn){
        var col_length = Math.sqrt(board.length);
        var num_cols = Math.sqrt(board.length);
        var index = (i * col_length) + j;
        for(var i=0;i<col_length - 1;i++){
            var rows_filled = 0;
            for(var j=0;j<num_rows - 1; j++){
                if(board[index][turn]){
                    rows_filled++;
                }
                else{
                    break;
                }
            }
            if(rows_filled == row_length){
                return true;
            }
        }
    }
}