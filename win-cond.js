var debug = false;

var Win_Cond = function(){};

var Win_Cond_Row = function(){};

Win_Cond_Row.prototype = Object.create(Win_Cond.prototype);
Win_Cond_Row.prototype.constructor = Win_Cond_Row;
Win_Cond_Row.prototype.check = function (board, turn) {
    var row_length = Math.sqrt(board.length);
    var num_rows = Math.sqrt(board.length);
    if (debug) console.log('row_length and num_rows is: ', row_length, num_rows);
    for (var i = 0; i < row_length; i++) { //iterate through each row
        var rows_filled = 0;
        for (var j = 0; j < num_rows; j++) { //iterate through each item in row
            if (debug) console.log('i and j are: ' + i + ' ' + j);
            if (board[(i * row_length) + j][turn]) {//check if turn ('x' or 'o') is true
                rows_filled++;
                if (debug) console.log('rows_filled is: ', rows_filled);
            }
            else {
                break;
            }
        }
        if (rows_filled == row_length) {//if entire row is full of 'x' or 'o', then player wins!
            return true;
        }
    }
    return false;
};

var Win_Cond_Col = function(){};
Win_Cond_Col.prototype = Object.create(Win_Cond.prototype);
Win_Cond_Col.prototype.constructor = Win_Cond_Col;
Win_Cond_Col.prototype.check = function(board,turn){
    var col_length = Math.sqrt(board.length);
    var num_cols = Math.sqrt(board.length);
    var cols_filled = 0;
    for(var j=0;j<board.length; j+=num_cols){//iterate through each column item
        if(board[j][turn]){//check if turn ('x' or 'o') is true
            cols_filled++;
        }
        else{
            break;
        }
    }
    if(cols_filled == col_length){//if entire column is full of 'x' or 'o', then player wins!
        return true;
    }
    return false;
};

var Win_Cond_Diag = function(){};
Win_Cond_Diag.prototype = Object.create(Win_Cond.prototype);
Win_Cond_Diag.prototype.constructor = Win_Cond_Col;
Win_Cond_Diag.prototype.check = function(board,turn){
    var col_length = Math.sqrt(board.length);
    var num_cols = Math.sqrt(board.length);
    var right_diagonals_filled = 0;
    var left_diagonals_filled = 0;
    for(var i=0;i<col_length;i++) {//iterate through each row and column item at diagonal position
        var j = i;
        if(board[(i*col_length) + j][turn]){//check if turn ('x' or 'o') is true
            right_diagonals_filled++;
        }
        else{
            break;
        }
    }
    for(a=0;a<num_cols; a++){//iterate through each row and column item at diagonal position
        var b = num_cols - 1 - a;
        if(board[(b*col_length) + a][turn]){
            left_diagonals_filled++;
        }
        else{
            break;
        }
    }
    if(right_diagonals_filled || left_diagonals_filled == col_length){//if entire diagonal is full of 'x' or 'o', then player wins!
        return true;
    }
    return false;
};

