// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Beka";

let isInstructor: boolean;

isInstructor = true;

// More coplex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
    name: "Beka",
    age: 21
};

// person = {
//     isEmployee: true
// }

let people: Person[];

//  Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

// Functions & types

function add(a: number, b: number): number | string {
    return a + b;
}

function print(value: any) {
    console.log(value);
}


