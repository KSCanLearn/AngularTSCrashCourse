// DataTypes

// string
let fname: string = "Hon";
console.log("🚀 ~ fname:", fname);

// number
let num: number = 10;
console.log("🚀 ~ num:", num);

let testStrForNum = "10";
let parseToNum = parseInt(testStrForNum);

// boolean
let isValid: boolean = false;
console.log("🚀 ~ isValid:", isValid);

// array
let empList: string[];
empList = ["sad", "dsa", "asd"];
let numList: Array<number>;
numList = [1, 23, 4];

// enum

// NOte: const will automatically compiled as numbering (Ex. 1,2,3) in JS
const enum Color {
	Red,
	Blue,
	Yellow,
}

let c: Color = Color.Blue;

// tuple : https://www.tutorialsteacher.com/typescript/typescript-tuple
let tuplee : [string, number] = ["hellow", 1];
let employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

tuplee[0];
tuplee[1];
// if index is more than the tuple original space, will throw error as such: tuplee[2];

// any
// do not use ANY
let department : any;

// functions


// void


// never



