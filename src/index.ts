/* 
    Some of the code you'll need has already been written for you.
    Most of this code resides in services files within the services folder.
    Checkout the service file for more information on what each function does.
    Hint look for the functions / types that have been exported from the service files.
    The code you'll need has already been imported for you.

    You can run this file by running the following command from the root of the project: npm run start
*/

import inputService from './services/input';
import ticTacToeService from './services/tic-tac-toe';
import type { TicTacToeBoard, TicTacToeValue } from './services/tic-tac-toe';

// ======================================
// THIS SECTION REQUIRES SPECIAL ATTENTION
// ======================================

/*  
    Use the inputService's get method to prompt the user for input.
    Store the result in a variable.
    Do not worry about adding a spcace after the question mark.
*/
// EXAMPLE: const name: string = inputService.get('What is your name?');

// This is how you get an emtpy board:
// EXAMPLE: let board: TicTacToeBoard = ticTacToeService.getEmptyTicTacToeBoard();
/*
    Remember when you create a board, you need to store it in a variable.
    If you don't store it in a variable, you won't be able to use it later.
    You'll need to continually update the board as the game progresses.
    You'll want to use the same board for the entire game. 
    Use the variable you originally stored the board in after calling ticTacToeService.getEmptyTicTacToeBoard(); for the remainder of the game.
*/

// This is how you print the board:
// EXAMPLE: ticTacToeService.printBoard(board);
/* 
    You reference the service object, then call the function inside the service object.
    The function takes a parameter, the board.
    Hover the service object to see more about it, or check out the service file.
    Also, typing the name of the service object and a period will show you all the functions and types that have been exported from the service file.
    These are the functions and types that you can use from the service file.
*/

/* 
    The board is a 2D array of TicTacToeValues.
    The board is indexed like a matrix. The first index is the row, the second index is the column.
    The top left of the board is [0][0]
    The middle center of the board is [1][1]
    The bottom right of the board is [2][2]
    The board is a 3x3 matrix.
*/

// This is how you get the value at a specific location on the board:
// EXAMPLE: const middleCenter: TicTacToeValue = board[1][1];

// This is how you set the value at a specific location on the board:
// EXAMPLE: board[1][1] = 'X';

/*  
    Setting the value of a specific location on the board to something other than 'X' or 'O' will result in a type error:
    Example: board[1][1] = 'Y';
*/

// This is how you check if a value is equal to another value:
// EXAMPLE: const isX: boolean = middleCenter === 'X';

// This is how you check if a value is not equal to another value:
// EXAMPLE: const isNotX: boolean = middleCenter !== 'X';

/*
    Quick note, a return type of void means that the function does not return anything.
*/

// DON'T FORGET TO HOVER OVER THE FUNCTIONS AND TYPES TO SEE WHAT THEY DO AND WHAT THEY RETURN

// ================================================================ Your code below ================================================================ //

// ================================================================= Tic Tac Toe  ================================================================= //

/*
    Your goal is to create a tic-tac-toe game that prompts the user for input and prints the board after each turn.
    The game should start with an empty board.
    The game should alternate between 'X' and 'O' each turn.
    Inbetween each turn, you should check if the game is over.
    The game should end when there is a winner or a tie.
    The game should print the winner or tie after the game is over.
*/

function play(): void {
    let playing = true;
    while (playing) {
        playRound();

        // after each round, ask the user if they want to keep playing. If they say no, set playing to false.
    }
}

function playRound(): void {
    // here you will define the logic for a single round of tic-tac-toe
}

function isGameOver(board: TicTacToeBoard): boolean {
    // here you will define the logic for determining if the game is over
    // this happens either from a winner or a tie
    return false; // default return statement, replace with your own logic
}

function takeTurn(): void {
    // here you will define the logic for a single turn of tic-tac-toe
}

/* 
    It is likely you'll want to define more of your own functions.
    The best way to approach this is to think about explaining exactly how to play tic-tac-toe to someone who has never played before.
    You'll want to break down the game into steps.
    Each step should be a function.
    Each function should do one thing.
    Each function should have a descriptive name.
    Each function should be fairly small (less than 20 lines of code).

    Here is a function you might want to consider adding.
    - isValidTurnInput - checks if the user input is valid when they are asked to take a turn

    After adding all your functions, you'll want one main function for a round, whose job it is to call all the other functions in the correct order.
*/

// This calls the play function to start the code running. This should be the last line of the file.
play();
