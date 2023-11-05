import * as readlineSync from 'readline-sync';

/**
    @param message
    @returns the user's response to the message
    @description prompts the user with the message and returns the user's response
    @example const name: string = inputService.get('What is your name?');
    @example const age: number = inputService.get('What is your age?');
 */
function get(message: string): string {
    const response = readlineSync.question(message + '\n');
    return response;
}

const inputService = { get };

export default inputService;
