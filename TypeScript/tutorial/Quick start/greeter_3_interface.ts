// see -> https://www.typescriptlang.org/docs/tutorial.html

// At the command line, run the TypeScript compiler:
//   tsc greeter_3_interface.ts

// interface like structure.
interface Person {
    firstName: string;
    lastName: string;
}

function greeter3(person: Person) {
    return "Hello, " + person.firstName + " / " + person.lastName;
}

var user3 = {firstName: "Jane", lastName: "User"};

document.body.innerHTML = greeter3(user3);
