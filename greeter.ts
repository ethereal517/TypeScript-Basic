class Student {
	fullName: String;
	constructor(public firstName, public middleInitial, public lastName) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// tuple

let x: [string, number];

// enum

enum Color { Red, Green, Blue };
let c: Color = Color.Green;

// Any
let notSure: any = 4;

// Type Assertion

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;