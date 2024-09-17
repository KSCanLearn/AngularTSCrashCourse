function add(num1: number, num2: number, num3?: number): number {
	return num3 ? num1 + num2 + num3 : num1 + num2;
}

function add2(num1: number, num2: number, ...num3: number[]): number {
	return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

console.log(add2(2, 3, 4, 5, 6));
console.log(add2(2, 3, ...[4, 5, 6]));

const sub = (num1: number, num2: number): number => num1 - num2;

const mult = function (num1: number, num2: number): number {
	return num1 * num2;
};

// Generics
function getItems<Type>(items: Type[]) {
	return new Array<Type>().concat(items);
}

let concatNums = getItems<number>([1, 23, 4, 5, 6]);
let concatStrs = getItems<string>(["1", "3", "2"]);
