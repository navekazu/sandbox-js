// see -> https://www.typescriptlang.org/docs/tutorial.html

// At the command line, run the TypeScript compiler:
//   tsc greeter_2_type_annotation.ts


// type annotation, so error.
function greeter2(person: string) {
    return "Hello, " + person;
}

var user2 = [0, 1, 2];

document.body.innerHTML = greeter2(user2);