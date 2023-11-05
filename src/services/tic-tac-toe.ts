export type TicTacToeValue = 'X' | 'O' | ' ';
export type TicTacToeBoard = TicTacToeValue[][];

/**
    @description prints the tic-tac-toe board to the console
    @param ticTacToeBoard the board to print
    @return void
    @example printBoard(board);
*/
function printBoard(ticTacToeBoard: TicTacToeBoard) {
    console.log(ticTacToeBoard[0][0] + '|' + ticTacToeBoard[0][1] + '|' + ticTacToeBoard[0][2]);
    console.log('-----');
    console.log(ticTacToeBoard[1][0] + '|' + ticTacToeBoard[1][1] + '|' + ticTacToeBoard[1][2]);
    console.log('-----');
    console.log(ticTacToeBoard[2][0] + '|' + ticTacToeBoard[2][1] + '|' + ticTacToeBoard[2][2]);
}
/**
    @description returns an empty tic-tac-toe board
    @return an empty tic-tac-toe board
    @example const board: TicTacToeBoard = getEmptyTicTacToeBoard();
*/
function getEmptyTicTacToeBoard(): TicTacToeBoard {
    return [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ];
}

const ticTacToeService = {
    getEmptyTicTacToeBoard,
    printBoard,
};

export default ticTacToeService;
