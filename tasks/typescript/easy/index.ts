// TypeScript - Easy
// TypeScript program which has a function named greet which can take a string argument name and return a greeting message.

function greet(name: string): string {
    return `Hello, ${name}!`;
}

let user: string = 'John Doe';

console.log(greet(user));
