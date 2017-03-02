// see -> https://www.typescriptlang.org/docs/tutorial.html

// At the command line, run the TypeScript compiler:
//   tsc greeter_1.ts

function greeter1(person) {
    return "Hello, " + person;
}

var user1 = "Jane User";

document.body.innerHTML = greeter1(user1);