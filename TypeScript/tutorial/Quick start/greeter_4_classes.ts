// see -> https://www.typescriptlang.org/docs/tutorial.html

// At the command line, run the TypeScript compiler:
//   tsc greeter_4_classes.ts

/*
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter4(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user4 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter4(user4);
*/

class Student {
    fullName: string;
    constructor(firstName: string, middleInitial: string, lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter4(student: Student) {
    return "Hello, " + student.fullName;
}

var user4 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter4(user4);
