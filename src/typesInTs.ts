// 1) Type Inference (Implicit Types) - Type inference is when TypeScript automatically determines the type from the value.

let drink = "chai"; // inferred as string

let cups = Math.random() > 0.5 ? 10 : 5; // inferred as number

let myName = "mayank";
myName = "bajaj"

function multiply(a:number, b:number) {
    return a*b; // return type inferred as number
}

// 2) Type Annotation (Explicit Types) - Type annotation is when you tell TypeScript what type a variable, parameter, or return value should have.

let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;

// Function parameter & return annotations
function add(a: number, b: number): number {
    return a + b;
}