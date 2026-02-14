// (a) string, number, boolean

let name: string = "Mayank";
let age: number = 20;
let isStudent: boolean = true;

// (b) Type Inference - ts khud samajh jata hai type

let city = "Delhi";

// (c) any Type - ts off

let data: any = "hello";
data = 10;
data = true;

// (d) unknown (Better than any)

let value: unknown;
value = "hello";
value = 10;

// direct use nahi kar sakte
// console.log(value.toUpperCase()); 

// (e) void & never

// void – kuch return nahi karta
function greet(): void {
    console.log("Hello");
}

// never – kabhi end hi nahi hoga
function errorMsg(): never {
    throw new Error("Something wrong");
}

// Arrays

let nums: number[] = [1,2,3];
let names: string[] = ["ram", "shyam"];

let number: Array<number> = [1,2,3];

// Tuples (Fixed length array)

let user: [string, number] = ["Mayank", 20];

// Enums

enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Failed = "FAILED"
}

let output = Status.Pending 

// Union Types

let id: string | number;

id = 10;
id = "abc";

// Type Alias - Apna khud ka type bana sakte:

type User = {
    name: string;
    age: number;
};

let u1: User = {
    name: "Mayank",
    age: 20
}

// Literal Types

let role: "admin" | "user";

// role = "admin"; // correct
// role = "manager"; // error